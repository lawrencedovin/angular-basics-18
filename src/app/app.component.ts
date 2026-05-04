import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  ngOnInit() {
    this.message = 'Hello World';
  }

  handleClick(event: Event) {
    console.log(event);
  }
}
