import { Component, OnInit, Input } from '@angular/core';

import { Game, Card, Color, Direction, ALL_CARDS } from '../game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  @Input() cardIdx: number;
  Color = Color;
  Direction = Direction;

  constructor() { }

  card(): Card {
    return ALL_CARDS[this.cardIdx];
  }

  ngOnInit() {
  }

}