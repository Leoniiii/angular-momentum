import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentName = '';
  private readonly localStorageKey = 'momentumUserName';

  constructor() {}

  getSavedUser() {
    // TODO: move to a service
    this.currentName = localStorage.getItem(this.localStorageKey) || '';

    return this.currentName;
  }

  submitUserName(enteredName: string): void {
    this.currentName = enteredName;
    localStorage.setItem(this.localStorageKey, enteredName);
  }
}
