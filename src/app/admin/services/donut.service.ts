import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: 'y8z0As',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'For the pure chocolate lovers.',
    },
    {
      id: '3u98Kl',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 145,
      promo: 'new',
      description: 'Stick goodness.',
    },
    {
      id: 'ae098s',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel.',
    },
    {
      id: '8am763',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 138,
      description: 'For the sour advocate.',
    },
    {
      id: '1cb753',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 100,
      promo: 'limited',
      description: 'Delicious luscious lemon.',
    },
  ];

  getDonuts(): Donut[] {
    return this.donuts;
  }

  getDonut(id: string): Donut {
    return this.donuts.find(
      donut => donut.id === id) 
      || {name: '', icon: '', price: 0, description: ''};   
  }

  createDonut(payload: Donut): void {
    this.donuts = [...this.donuts, payload];
    console.log('this.donuts after create: ', this.donuts);
  }

  updateDonut(payload: Donut): void {
    this.donuts = this.donuts.map(donut => donut.id === payload.id ? payload : donut);
    console.log('this.donuts after update: ', this.donuts);
  }

  deleteDonut(payload: Donut): void {
    this.donuts = this.donuts.filter(donut => donut.id !== payload.id);
    console.log('this.donuts after delete: ', this.donuts);
  }
}
