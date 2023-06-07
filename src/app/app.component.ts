import { Component, OnInit } from '@angular/core';
import { UserService } from './core/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentName = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getSavedUser();
  }

  getSavedUser() {
    this.currentName = this.userService.getSavedUser();
  }

  submitUserName(enteredName: string): void {
    this.currentName = enteredName;
    this.userService.submitUserName(enteredName);
  }
}
