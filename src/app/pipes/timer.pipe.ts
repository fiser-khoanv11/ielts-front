import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    let m: any = Math.floor(value / 60);
    let s: any = value % 60;
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    return m + ":" + s;
  }

}
