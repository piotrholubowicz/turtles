export enum Color {
  BLUE,
  GREEN,
  PURPLE,
  RED,
  YELLOW,
  LAST,
  ANY
}

export enum Direction {
  UP,
  DOWN
}

export interface Card {
  direction: Direction;
  distance: number;  // 1-2
  color: Color;
}

export interface Game {
  id: number;
  players: string[];
  colors: { [id: string]: Color; };
  hands: { [id: string]: number[]; }
  deck: number[];
  discarded: number[];
  board: Color[][];
  active_player: number;
}

export const ALL_CARDS = [
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
