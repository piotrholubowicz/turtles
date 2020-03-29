import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game, Card, Color, ALL_CARDS } from '../game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  @Input('card') cardIdx: number;
  @Output() played = new EventEmitter<{cardIdx: number, game: Game}>();
  Color = Color;

  constructor() { }

  card(): Card {
    return ALL_CARDS[this.cardIdx];
  }

  play(): void {
    this.played.emit({cardIdx: this.cardIdx, game: this.game});
  }

  ngOnInit() {
  }

}