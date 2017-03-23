import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    let m = Math.floor(value / 60);
    let s = value % 60;
    return m + ":" + s;
  }

}
