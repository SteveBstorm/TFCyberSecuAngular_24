import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  transform(value: number): string {
    let min : number = Math.floor(value / 60)
    let sec = value % 60
    let retour = (min < 10 ? '0' : '') + min + ' minutes '
      + (sec < 10 ? '0' : '') + sec + " secondes"
    return retour;
  }

}
