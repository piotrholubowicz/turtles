import { Game, Color } from './game';

export const GAMES: Game[] = [
  {
    id: 234,
    players: ["Filip", "Sebastian"],
    colors: new Map([
      ["Filip", Color.RED],
      ["Sebastian", Color.BLUE],
    ]),
    hands: new Map([
      ["Filip", []],
      ["Sebastian", []],
    ]),
    deck: [],
    discarded: [],
    board: [
      [],
      [Color.RED, Color.GREEN],
      [],
      [Color.PURPLE, Color.YELLOW, Color.BLUE],
      [],
      []
    ],
    active_player: 0,
  },
]
