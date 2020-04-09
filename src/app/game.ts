export enum Color {
  BLUE,
  GREEN,
  PURPLE,
  RED,
  YELLOW,
  LAST,
  ANY,
}

export interface Card {
  distance: number; // 1-2
  color: Color;
}

export interface Move {
  color: Color;
  start: number[];
  end: number[];
}

export interface Game {
  id: number;
  players: string[];
  colors: { [id: string]: Color };
  hands: { [id: string]: number[] };
  deck: number[];
  discarded: number[];
  board: Color[][];
  last_move: Move;
  active_player: number;
  winner: string;
  next_game_id: number;
}

export const ALL_CARDS = [
  { distance: 1, color: Color.BLUE },
  { distance: 1, color: Color.BLUE },
  { distance: 1, color: Color.BLUE },
  { distance: 1, color: Color.BLUE },
  { distance: 1, color: Color.BLUE },
  { distance: 2, color: Color.BLUE },
  { distance: -1, color: Color.BLUE },
  { distance: -1, color: Color.BLUE },

  { distance: 1, color: Color.GREEN },
  { distance: 1, color: Color.GREEN },
  { distance: 1, color: Color.GREEN },
  { distance: 1, color: Color.GREEN },
  { distance: 1, color: Color.GREEN },
  { distance: 2, color: Color.GREEN },
  { distance: -1, color: Color.GREEN },
  { distance: -1, color: Color.GREEN },

  { distance: 1, color: Color.PURPLE },
  { distance: 1, color: Color.PURPLE },
  { distance: 1, color: Color.PURPLE },
  { distance: 1, color: Color.PURPLE },
  { distance: 1, color: Color.PURPLE },
  { distance: 2, color: Color.PURPLE },
  { distance: -1, color: Color.PURPLE },
  { distance: -1, color: Color.PURPLE },

  { distance: 1, color: Color.RED },
  { distance: 1, color: Color.RED },
  { distance: 1, color: Color.RED },
  { distance: 1, color: Color.RED },
  { distance: 1, color: Color.RED },
  { distance: 2, color: Color.RED },
  { distance: -1, color: Color.RED },
  { distance: -1, color: Color.RED },

  { distance: 1, color: Color.YELLOW },
  { distance: 1, color: Color.YELLOW },
  { distance: 1, color: Color.YELLOW },
  { distance: 1, color: Color.YELLOW },
  { distance: 1, color: Color.YELLOW },
  { distance: 2, color: Color.YELLOW },
  { distance: -1, color: Color.YELLOW },
  { distance: -1, color: Color.YELLOW },

  { distance: 1, color: Color.ANY },
  { distance: 1, color: Color.ANY },
  { distance: 1, color: Color.ANY },
  { distance: 1, color: Color.ANY },
  { distance: 1, color: Color.ANY },
  { distance: -1, color: Color.ANY },
  { distance: -1, color: Color.ANY },

  { distance: 1, color: Color.LAST },
  { distance: 1, color: Color.LAST },
  { distance: 1, color: Color.LAST },
  { distance: 2, color: Color.LAST },
  { distance: 2, color: Color.LAST },
];
