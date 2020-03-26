import { Game, Color, Card, Direction } from './game';

export class GameEngine {

  static createGame(players: string[]): Game {
    let turtles = [Color.BLUE, Color.GREEN, Color.PURPLE, Color.RED, Color.YELLOW];
    GameEngine.shuffle(turtles);
    let deck = [...GameEngine.ALL_CARDS];  // shallow copy
    GameEngine.shuffle(deck);

    let playersToTurtles = new Map<string, Color>();
    players.forEach(player => playersToTurtles.set(player, turtles.pop()));
    let playersToHands = new Map<string, Card[]>();
    players.forEach(player => playersToHands.set(player, deck.splice(0, 5)));

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
    };
  }

  playCard(game: Game, card_id: number, color: Color) {
    let field = 0;
    let pos = 0;
    for (field=0; field<game.board.length; field++) {
      for (pos=0; pos<game.board[field].length; pos++) {
        if (game.board[field][pos] == color) {
          break;
        }
      }
    }
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

  static ALL_CARDS = [
    { direction: Direction.UP, distance: 1, color: Color.BLUE },
    { direction: Direction.UP, distance: 1, color: Color.BLUE },
    { direction: Direction.UP, distance: 1, color: Color.BLUE },
    { direction: Direction.UP, distance: 1, color: Color.BLUE },
    { direction: Direction.UP, distance: 1, color: Color.BLUE },
    { direction: Direction.UP, distance: 2, color: Color.BLUE },
    { direction: Direction.DOWN, distance: 1, color: Color.BLUE },
    { direction: Direction.DOWN, distance: 1, color: Color.BLUE },

    { direction: Direction.UP, distance: 1, color: Color.GREEN },
    { direction: Direction.UP, distance: 1, color: Color.GREEN },
    { direction: Direction.UP, distance: 1, color: Color.GREEN },
    { direction: Direction.UP, distance: 1, color: Color.GREEN },
    { direction: Direction.UP, distance: 1, color: Color.GREEN },
    { direction: Direction.UP, distance: 2, color: Color.GREEN },
    { direction: Direction.DOWN, distance: 1, color: Color.GREEN },
    { direction: Direction.DOWN, distance: 1, color: Color.GREEN },

    { direction: Direction.UP, distance: 1, color: Color.PURPLE },
    { direction: Direction.UP, distance: 1, color: Color.PURPLE },
    { direction: Direction.UP, distance: 1, color: Color.PURPLE },
    { direction: Direction.UP, distance: 1, color: Color.PURPLE },
    { direction: Direction.UP, distance: 1, color: Color.PURPLE },
    { direction: Direction.UP, distance: 2, color: Color.PURPLE },
    { direction: Direction.DOWN, distance: 1, color: Color.PURPLE },
    { direction: Direction.DOWN, distance: 1, color: Color.PURPLE },

    { direction: Direction.UP, distance: 1, color: Color.RED },
    { direction: Direction.UP, distance: 1, color: Color.RED },
    { direction: Direction.UP, distance: 1, color: Color.RED },
    { direction: Direction.UP, distance: 1, color: Color.RED },
    { direction: Direction.UP, distance: 1, color: Color.RED },
    { direction: Direction.UP, distance: 2, color: Color.RED },
    { direction: Direction.DOWN, distance: 1, color: Color.RED },
    { direction: Direction.DOWN, distance: 1, color: Color.RED },

    { direction: Direction.UP, distance: 1, color: Color.YELLOW },
    { direction: Direction.UP, distance: 1, color: Color.YELLOW },
    { direction: Direction.UP, distance: 1, color: Color.YELLOW },
    { direction: Direction.UP, distance: 1, color: Color.YELLOW },
    { direction: Direction.UP, distance: 1, color: Color.YELLOW },
    { direction: Direction.UP, distance: 2, color: Color.YELLOW },
    { direction: Direction.DOWN, distance: 1, color: Color.YELLOW },
    { direction: Direction.DOWN, distance: 1, color: Color.YELLOW },

    { direction: Direction.UP, distance: 1, color: Color.ANY },
    { direction: Direction.UP, distance: 1, color: Color.ANY },
    { direction: Direction.UP, distance: 1, color: Color.ANY },
    { direction: Direction.UP, distance: 1, color: Color.ANY },
    { direction: Direction.UP, distance: 1, color: Color.ANY },
    { direction: Direction.DOWN, distance: 1, color: Color.ANY },
    { direction: Direction.DOWN, distance: 1, color: Color.ANY },

    { direction: Direction.UP, distance: 1, color: Color.LAST },
    { direction: Direction.UP, distance: 1, color: Color.LAST },
    { direction: Direction.UP, distance: 1, color: Color.LAST },
    { direction: Direction.UP, distance: 2, color: Color.LAST },
    { direction: Direction.UP, distance: 2, color: Color.LAST },
  ]

}