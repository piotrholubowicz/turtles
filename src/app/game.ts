export enum Color {
  RED,
  BLUE,
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

export class Game {
  id: string;
  players: string[];
  colors: Map<string, Color>;
  hands: Map<string, Card[]>;
  deck: Card[];
  discarded: Card[];
  board: Color[][];
  active_player: number;
}
