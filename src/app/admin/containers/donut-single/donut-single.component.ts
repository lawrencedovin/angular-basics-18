import { Component, inject, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss'],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  donutService: DonutService = inject(DonutService);

  ngOnInit(): void {
    const id = 'oeLc_c0';
    this.donutService
      .getDonut(id)
      .subscribe(donut => this.donut = donut);
  }

  onCreate(donut: Donut): void {
    this.donutService
      .createDonut(donut)
      .subscribe(() => console.log('Created 🍩 Successfully'));
  }

  onUpdate(donut: Donut): void {
    this.donutService
      .updateDonut(donut)
      .subscribe(() => console.log('Updated 🍩 Successfully'));
  }

  onDelete(donut: Donut): void {
    this.donutService
      .deleteDonut(donut)
      .subscribe(() => console.log('Deleted 🍩 Successfully'));
  }
}
