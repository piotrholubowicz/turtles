import { Game, Color, Direction } from './game';

export const GAMES: Game[] = [
  {
    id: 234,
    players: ["Filip", "Sebastian"],
    colors: new Map([
      ["Filip", Color.RED],
      ["Sebastian", Color.BLUE],
    ]),
    hands: new Map([
      ["Filip", [
        {
          direction: Direction.UP,
          distance: 1,
          color: Color.BLUE,
        },
        {
          direction: Direction.UP,
          distance: 2,
          color: Color.RED,
        },
        {
          direction: Direction.UP,
          distance: 1,
          color: Color.GREEN,
        },
        {
          direction: Direction.UP,
          distance: 2,
          color: Color.LAST,
        },
        {
          direction: Direction.DOWN,
          distance: 1,
          color: Color.RED,
        },
        ]],
      ["Sebastian", []],
    ]),
    deck: [
        {
          direction: Direction.UP,
          distance: 1,
          color: Color.BLUE,
        },
        {
          direction: Direction.UP,
          distance: 2,
          color: Color.RED,
        },
    ],
    discarded: [
        {
          direction: Direction.UP,
          distance: 1,
          color: Color.YELLOW,
        },
    ],
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
