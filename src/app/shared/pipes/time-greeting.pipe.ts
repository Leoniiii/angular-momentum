import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeGreeting',
})
export class TimeGreetingPipe implements PipeTransform {
  transform(value: Date): string {
    const hours = value.getHours();

    if (hours < 12) {
      return 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }
}
