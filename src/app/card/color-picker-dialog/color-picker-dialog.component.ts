import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-color-picker-dialog',
  templateUrl: './color-picker-dialog.component.html',
  styleUrls: ['./color-picker-dialog.component.css']
})
export class ColorPickerDialogComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}