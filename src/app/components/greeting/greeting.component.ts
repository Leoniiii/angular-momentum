import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit, OnDestroy {
  currentDate = new Date();
  dateInterval?: any;

  @Input({ required: true }) enteredName = '';

  ngOnInit(): void {
    this.dateInterval = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.dateInterval);
  }
}
