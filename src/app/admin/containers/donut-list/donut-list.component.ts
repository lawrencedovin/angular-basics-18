import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
  <div *ngIf="donuts.length; else noDonutsBlock">
    <ng-container *ngFor="let donut of donuts">
      <donut-card [donut]="donut"></donut-card>
    </ng-container>
  </div>
  <ng-template #noDonutsBlock>
    <p>No donuts here....</p>
  </ng-template>
  `,
  styles: []
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo: true,
        description: 'For the pure chocolate lovers.'
      },
      {
        id: '3u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 145,
        description: 'Stick goodness.'
      },
      {
        id: 'ae098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.'
      }
    ];
  }

}
