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
    const id = '8am763';
    this.donut = this.donutService.getDonut(id);
  }

  onCreate(donut: Donut): void {
    this.donutService.createDonut(donut);
  }

  onUpdate(donut: Donut): void {
    this.donutService.updateDonut(donut);
  }

  onDelete(donut: Donut): void {
    this.donutService.deleteDonut(donut);
  }
}
