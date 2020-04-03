import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ImageService } from '../image.service';
import { Game, Card, Color, ALL_CARDS } from '../game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  @Input('card') cardIdx: number;
  @Input() enabled: boolean;
  @Output() played = new EventEmitter<{cardIdx: number, game: Game}>();
  Color = Color;

  constructor(
    private modalService: NgbModal,
    private imageService: ImageService
  ) { }

  ngOnInit() {
  }

  card(): Card {
    return ALL_CARDS[this.cardIdx];
  }

  play(): void {
    if (this.enabled) {
      this.played.emit({cardIdx: this.cardIdx, game: this.game});
    }
  }

  src(): string {
    return this.imageService.getFullCardPath(ALL_CARDS[this.cardIdx]);
  }

}