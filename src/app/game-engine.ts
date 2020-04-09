import { Game, Color, Card, ALL_CARDS } from './game';

export class GameEngine {
  static createGame(players: string[]): Game {
    if (players.length < 2) {
      console.log('too few players');
      return;
    }
    if (players.filter((item, index) => players.indexOf(item) !== index).length > 0) {
      console.log("names can't repeat");
      return;
    }
    const turtles = [Color.BLUE, Color.GREEN, Color.PURPLE, Color.RED, Color.YELLOW];
    GameEngine.shuffle(turtles);
    const deck = Array.from(ALL_CARDS.keys()); // shallow copy
    GameEngine.shuffle(deck);

    const playersToTurtles: { [id: string]: Color } = {};
    players.forEach((player) => (playersToTurtles[player] = turtles.pop()));
    const playersToHands: { [id: string]: number[] } = {};
    players.forEach((player) => (playersToHands[player] = deck.splice(0, 5)));

    return {
      id: undefined,
      players,
      colors: playersToTurtles,
      hands: playersToHands,
      deck,
      discarded: [],
      board: [[Color.RED, Color.GREEN, Color.PURPLE, Color.YELLOW, Color.BLUE], [], [], [], [], [], [], [], [], []],
      last_move: undefined,
      active_player: 0,
      winner: undefined,
      next_game_id: undefined,
    };
  }

  static defineColors(game: Game, cardIdx: number): Color[] {
    const color = ALL_CARDS[cardIdx].color;
    switch (color) {
      case Color.BLUE:
      case Color.GREEN:
      case Color.PURPLE:
      case Color.RED:
      case Color.YELLOW:
        const fieldAndPos = GameEngine.findPosition(game, color);
        if (fieldAndPos[0] === 0 && ALL_CARDS[cardIdx].distance < 0) {
          console.log(`Can't move back ${color}`);
          return [];
        }
        return [color];
      case Color.ANY:
        let colors = [Color.BLUE, Color.GREEN, Color.PURPLE, Color.RED, Color.YELLOW];
        if (ALL_CARDS[cardIdx].distance < 0) {
          colors = colors.filter((c) => game.board[0].indexOf(c) === -1);
        }
        return colors;
      case Color.LAST:
        return [...game.board.find((f) => f.length > 0)];
    }
    throw new Error(`Unsupported color ${color}`);
  }

  // color should be well defined
  static playCard(game: Game, cardIdx: number, color: Color) {
    if (game.winner) {
      throw new Error(`Can't play anymore, ${game.winner} has won`);
    }
    GameEngine.makeMove(game, ALL_CARDS[cardIdx].distance, color);
    GameEngine.useCard(game, cardIdx);
    GameEngine.reshuffleIfNecessary(game);
    // tslint:disable-next-line: no-unused-expression
    GameEngine.gameOver(game) || GameEngine.nextPlayer(game);
    console.log(game);
  }

  static makeMove(game: Game, distance: number, color: Color) {
    const fieldAndPos = GameEngine.findPosition(game, color);
    const field = fieldAndPos[0];
    const pos = fieldAndPos[1];

    // On start turtles are not stacked
    const stackSize = field === 0 ? 1 : game.board[field].length - pos;
    // We can't jump out of the board
    const landingField = Math.min(field + distance, game.board.length - 1);
    if (landingField < 0) {
      throw new Error(`Can't go back, already on the first field`);
    }
    const landingPos = game.board[landingField].length;

    const stack = game.board[field].splice(pos, stackSize);
    game.board[landingField] = game.board[landingField].concat(stack);

    console.log(`moved ${stackSize} from ${field} to ${landingField}`);
    console.log(game);
    game.last_move = { color, start: fieldAndPos, end: [landingField, landingPos] };
  }

  static useCard(game: Game, cardIdx: number) {
    const player = game.players[game.active_player];
    console.log(player);
    // TODO map vs dict
    const handIdx = game.hands[player].findIndex((i) => i === cardIdx);
    if (handIdx === -1) {
      throw new Error(`Invalid move, ${ALL_CARDS[cardIdx]} not found for ${player}`);
    }
    game.discarded.push(game.hands[player].splice(handIdx, 1)[0]);
    game.hands[player].push(game.deck.pop());
  }

  static reshuffleIfNecessary(game: Game): boolean {
    if (game.deck.length === 0) {
      game.deck = game.discarded;
      GameEngine.shuffle(game.deck);
      game.discarded = [];
      return true;
    }
    return false;
  }

  static gameOver(game: Game): boolean {
    if (game.board[game.board.length - 1].length === 0) {
      return false;
    }
    for (let field = game.board.length - 1; field >= 0; field--) {
      for (const color of game.board[field]) {
        const player: string = Object.keys(game.colors).find((p) => game.colors[p] === color);
        if (player) {
          game.winner = player;
          console.log(`${player} won!`);
          return true;
        }
      }
    }
    throw new Error(`Invalid board, reached last field but no winner found`);
  }

  static nextPlayer(game: Game) {
    game.active_player = (game.active_player + 1) % game.players.length;
  }

  static findPosition(game: Game, color: Color) {
    let field = 0;
    let pos = 0;
    for (field = 0; field < game.board.length; field++) {
      for (pos = 0; pos < game.board[field].length; pos++) {
        if (game.board[field][pos] === color) {
          return [field, pos];
        }
      }
    }
    console.log(game);
    throw new Error(`Invalid board, ${color} not found`);
  }

  static shuffle<T>(a: T[]): T[] {
    for (let i = a.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      const x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  }
}
