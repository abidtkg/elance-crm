import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDateTime',
  standalone: false
})
export class ToDateTimePipe implements PipeTransform {

  toLocalDateTime(date: string){
    const rawDate = new Date(date);
    const stringDate = rawDate.toLocaleDateString('en-US',
    { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'});
    return stringDate;
}

transform(value: string, ...args: any[]): string {
    const dateFormat = new Date(value).toISOString();
    return this.toLocalDateTime(dateFormat);
}

}
