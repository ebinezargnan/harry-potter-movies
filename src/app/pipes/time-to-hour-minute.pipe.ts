import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToHourMinute',
  standalone: true,
})
export class TimeToHourMinutePipe implements PipeTransform {
  transform(timeValue: string): string {
    let hours = Math.floor(Number(timeValue) / 60);

    let minutes = Math.floor(Number(timeValue) % 60);

    return hours + 'h ' + minutes + 'min';
  }
}
