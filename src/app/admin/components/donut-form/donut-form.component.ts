import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  selector: 'donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss']
})
export class DonutFormComponent {
  @Input() donut!: Donut;
  @Input() isEdit!: boolean;
  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<Donut>();

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon'
  ];

  handleCreate(form: NgForm) {
    if(form.valid) {
      this.create.emit(form.value);
    } 
    else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if(form.valid) this.update.emit({ id: this.donut.id, ...form.value });
    else form.form.markAllAsTouched();
  }

  handleDelete() {
    if(confirm(`Really delete ${this.donut.name}?`)) {
      this.delete.emit({ ...this.donut });
    }
  }
}
