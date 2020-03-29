import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VERSION, MatDialog, MatDialogRef } from '@angular/material';

import { Game, Card, Color, ALL_CARDS } from '../game';
import { ColorPickerDialogComponent } from './color-picker-dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  version = VERSION;

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

  openColorPickerDialog() {
    this.colorPickerDialogRef = this.dialog.open(ColorPickerDialogComponent);
  }

}