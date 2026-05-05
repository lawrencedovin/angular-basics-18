import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

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

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo: 'limited',
        description: 'For the pure chocolate lovers.'
      },
      {
        id: '3u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 145,
        promo: 'new',
        description: 'Stick goodness.'
      },
      {
        id: 'ae098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.'
      },
      {
        id: '8am763',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 138,
        description: 'For the sour advocate.'
      },
      {
        id: '1cb753',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 100,
        promo: 'limited',
        description: 'Delicious luscious lemon.'
      }
    ];
  }

  trackById(index: number, donut: Donut) {
    return donut.id;
  }
}
