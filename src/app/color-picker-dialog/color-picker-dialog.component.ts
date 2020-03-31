import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Color } from '../game';

@Component({
  selector: 'app-color-picker-dialog',
  templateUrl: './color-picker-dialog.component.html',
  styleUrls: ['./color-picker-dialog.component.css']
})
export class ColorPickerDialogComponent implements OnInit {
  @Input() colors: Color[];
  colorPickerForm: FormGroup;
  Color = Color;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.colorPickerForm = this.formBuilder.group({
      color: '',
    });
  }

  private submitForm() {
    this.activeModal.close(this.colorPickerForm.value);
  }

  ngOnInit() {
  }

}