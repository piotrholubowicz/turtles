import { Component, OnInit, Input } from '@angular/core';

import { Game, Card, Color, Direction } from '../game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  @Input() card: Card;
  Color = Color;
  Direction = Direction;

  constructor() { }

  ngOnInit() {
  }

}