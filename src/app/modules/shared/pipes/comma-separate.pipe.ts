import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparate',
  standalone: false
})
export class CommaSeparatePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let x = value.toString();
    return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

}
