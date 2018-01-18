import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})

export class PricePipe implements PipeTransform {
  transform(value: string, text: string = 'Call') : string{
    return value ? value : text;
  }
}
