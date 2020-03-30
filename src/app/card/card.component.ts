import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Game, Card, Color, ALL_CARDS } from '../game';
import { ColorPickerDialogComponent } from './color-picker-dialog/color-picker-dialog.component';

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

  colorPickerDialogRef: MatDialogRef<ColorPickerDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  card(): Card {
    return ALL_CARDS[this.cardIdx];
  }

  play(): void {
    this.played.emit({cardIdx: this.cardIdx, game: this.game});
  }

  openColorPickerDialog(): void {
    this.colorPickerDialogRef = this.dialog.open(ColorPickerDialogComponent);
  }

}