import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limiteCaracteres'
})
export class LimiteCaracteresPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0,250) + " ...";
  }

}