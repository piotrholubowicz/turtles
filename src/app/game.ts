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

export class Card {
  direction: Direction;
  distance: number;  // 1-2
  color: Color;

  toString(): string {
    return "foo";
    // return `${Color[this.color]}: ${this.distance} ${Direction[this.direction]}`;
  }
}

export interface Game {
  id: number;
  players: string[];
  colors: Map<string, Color>;
  hands: Map<string, number[]>;
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
