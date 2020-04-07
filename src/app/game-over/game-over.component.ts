import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Color } from '../game';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {
  @Input() winner: string;
  @Input() color: Color;

  constructor(
    public activeModal: NgbActiveModal,
    private imageService: ImageService,
  ) {}

  ngOnInit() {
  }

  turtleCardSrc(): string {
    return this.imageService.getTurtleCardPath(this.color);
  }

}
