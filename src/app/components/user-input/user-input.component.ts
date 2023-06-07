import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  @Output() submitUser = new EventEmitter<string>();
  enteredName = '';

  submitUserName() {
    if (this.enteredName.length == 0) return;
    this.submitUser.emit(this.enteredName);
    this.enteredName = '';
  }
}
