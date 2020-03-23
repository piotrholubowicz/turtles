export enum Color {
  BLUE,
  GREEN,
  PURPLE,
  RED,
  YELLOW,
  LAST
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
  colors: Map<string, Color>;
  hands: Map<string, Card[]>;
  deck: Card[];
  discarded: Card[];
  board: Color[][];
  active_player: number;
}
