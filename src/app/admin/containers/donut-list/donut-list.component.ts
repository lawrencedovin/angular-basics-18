import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <div class="donut-list-actions">
      <a routerLink="new" class="btn btn--green">
        New Donut
        <img src="/assets/img/icon/plus.svg" />
      </a>
    </div>
    <ng-container *ngIf="donuts?.length; else noDonuts">
      <donut-card
        *ngFor="let donut of donuts; trackBy: trackById"
        [donut]="donut"
      >
      </donut-card>
    </ng-container>
    <ng-template #noDonuts>
      <p>No donuts here....</p>
    </ng-template>
  `,
  styles: [`
    .donut-list {
      &-actions {
        margin-bottom: 10px;
      }
    }
  `],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];
  donutService: DonutService = inject(DonutService);

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe((donuts: Donut[]) => {
      this.donuts = donuts;
    });
  }

  trackById(index: number, donut: Donut) {
    return donut.id;
  }
}
