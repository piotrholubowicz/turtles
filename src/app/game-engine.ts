import { Game, Color, Card, Direction, ALL_CARDS } from './game';

export class GameEngine {

  static createGame(players: string[]): Game {
    let turtles = [Color.BLUE, Color.GREEN, Color.PURPLE, Color.RED, Color.YELLOW];
    GameEngine.shuffle(turtles);
    let deck = Array.from(ALL_CARDS.keys());  // shallow copy
    GameEngine.shuffle(deck);

    let playersToTurtles: { [id: string]: Color; } = {};
    players.forEach(player => playersToTurtles[player] = turtles.pop());
    let playersToHands: { [id: string]: number[]; } = {};
    players.forEach(player => playersToHands[player] = deck.splice(0, 5));

    return {
      id: undefined,
      players: players,
      colors: playersToTurtles,
      hands: playersToHands,
      deck: deck,
      discarded: [],
      board: [
        [Color.RED, Color.GREEN, Color.PURPLE, Color.YELLOW, Color.BLUE],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
      active_player: 0,
      winner: undefined,
    };
  }

  // color should be well defined
  static playCard(game: Game, cardIdx: number, color: Color) {
    if (game.winner) {
      throw `Can't play anymore, ${game.winner} has won`;
    }
    GameEngine.makeMove(game, ALL_CARDS[cardIdx], color);
    GameEngine.useCard(game, cardIdx);
    GameEngine.gameOver(game) || GameEngine.nextPlayer(game);
  }

  static makeMove(game: Game, card: Card, color: Color) {
    let fieldAndPos = GameEngine.findPosition(game, color);
    let field = fieldAndPos[0];
    let pos = fieldAndPos[1];
  
    // On start turtles are not stacked
    let stackSize = field==0 ? 1 : game.board[field].length-pos;
    // We can't jump out of the board
    let landingField = Math.min(field + card.distance, game.board.length-1);

    let stack = game.board[field].splice(pos, stackSize);
    game.board[landingField] = game.board[landingField].concat(stack);

    console.log(`moved ${stackSize} from ${field} to ${landingField}`);
    console.log(game);
  }

  static useCard(game: Game, cardIdx: number) {
    const player = game.players[game.active_player];
    console.log(player);
    // TODO map vs dict
    let handIdx = game.hands[player].findIndex(i => i == cardIdx);
    if (handIdx == -1) {
      throw `Invalid move, ${ALL_CARDS[cardIdx]} not found for ${player}`;
    }
    game.discarded.push(game.hands[player].splice(handIdx, 1)[0]);
    game.hands[player].push(game.deck.pop());
  }

  static gameOver(game: Game): boolean {
    if (game.board[game.board.length-1].length == 0) {
      return false;
    }
    for (let field=game.board.length-1; field>=0; field--) {
      for (let pos=0; pos<game.board[field].length; pos++) {
        const color: Color = game.board[field][pos];
        const player: string = Object.keys(game.colors).find(player => game.colors[player] === color);
        if (player) {
          game.winner = player;
          console.log(`${player} won!`);
          return true;
        }
      }
    }
    throw `Invalid board, reached last field but no winner found`;
  }

  static nextPlayer(game: Game) {
    game.active_player = (game.active_player + 1) % game.players.length;
  }

  static findPosition(game: Game, color: Color) {
    let field = 0;
    let pos = 0;
    for (field=0; field<game.board.length; field++) {
      for (pos=0; pos<game.board[field].length; pos++) {
        if (game.board[field][pos] == color) {
          return [field, pos];
        }
      }
    }
    throw `Invalid board, ${color} not found`;
  }

  static shuffle<T>(a: T[]): T[] {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        let x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
  }    

}