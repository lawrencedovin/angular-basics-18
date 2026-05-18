import { Component, inject, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DonutFormComponent } from '../../components/donut-form/donut-form.component';

@Component({
  standalone: true,
  imports: [DonutFormComponent],
  selector: 'donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss'],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  isEdit!: boolean;
  donutService: DonutService = inject(DonutService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.isEdit = this.route.snapshot.data['isEdit'];
    this.donutService
      .getDonut(id)
      .subscribe(donut => this.donut = donut);
  }

  onCreate(donut: Donut): void {
    this.donutService
      .createDonut(donut)
      .subscribe((donut) => this.router.navigate([`/admin/donuts/${donut.id}`]));
  }

  onUpdate(donut: Donut): void {
    this.donutService
      .updateDonut(donut)
      .subscribe({
        next: () => this.routeToDonutList(),
        error: (err) => console.log(`onUpdate error: ${err}`)
    });
  }

  onDelete(donut: Donut): void {
    this.donutService
      .deleteDonut(donut)
      .subscribe(() => this.routeToDonutList());
  }

  routeToDonutList(): void {
    this.router.navigate(['/admin/donuts']);
  }
}
