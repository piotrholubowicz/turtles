import { Game, Color } from './game';

export const GAMES: Game[] = [
  {
    id: "foo",
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
    board: [],
    active_player: 0,
  },
]
