import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
  <ng-container *ngIf="donuts.length; else noDonuts">
    <donut-card 
      *ngFor="let donut of donuts; trackBy: trackById" 
      [donut]="donut">
    </donut-card>
</ng-container>
  <ng-template #noDonuts>
    <p>No donuts here....</p>
  </ng-template>
  `,
  styles: []
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
  donuts!: Donut[];
  donutService: DonutService = inject(DonutService);

  ngOnInit(): void {
    this.donuts = this.donutService.getDonuts();
  }

  trackById(index: number, donut: Donut) {
    return donut.id;
  }
}
