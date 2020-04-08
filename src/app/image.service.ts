import { Injectable } from '@angular/core';

import { Card, Color } from './game';

@Injectable()
export class ImageService {
  private PREFIX = '/assets/img';
  // private PREFIX = 'https://raw.githubusercontent.com/piotrholubowicz/turtles/master/src/assets/img';

  constructor() {}

  getMoveCardPath(card?: Card): string {
    if (!card) {
      return `${this.PREFIX}/card-back.png`;
    }
    const color = Color[card.color].toLowerCase();
    const sign = card.distance === -1 ? 'minus' : card.distance === 2 ? 'plusplus' : 'plus';
    return `${this.PREFIX}/card-${color}-${sign}.png`;
  }

  getTurtleCardPath(color?: Color): string {
    const which = color !== undefined ? Color[color].toLowerCase() : 'back';
    return `${this.PREFIX}/turtle-card-${which}.png`;
  }

  getTurtlePath(color: Color): string {
    return `${this.PREFIX}/meeple-${Color[color].toLowerCase()}.png`;
  }
}
