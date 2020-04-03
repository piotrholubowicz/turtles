import { Injectable } from '@angular/core';

import { Card, Color } from "./game";

@Injectable()
export class ImageService {
  // private PREFIX = '/assets/img';
  private PREFIX = 'https://raw.githubusercontent.com/piotrholubowicz/turtles/master/src/assets/img';

  constructor() { }

  getMoveCardPath(card: Card): string {
    let color = Color[card.color].toLowerCase();
    let sign = card.distance == -1 ? 'minus' : (card.distance == 2 ? 'plusplus' : 'plus');
    return `${this.PREFIX}/card-${color}-${sign}.png`;
  }

  getTurtleCardPath(color?: Color): string {
    let which = color ? Color[color].toLowerCase() : 'back';
    return `${this.PREFIX}/turtle-card-${which}.png`;
  }

  getTitlePath(): string {
    return `${this.PREFIX}/title.png`;
  }

}