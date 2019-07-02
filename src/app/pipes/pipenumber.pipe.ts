import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipenumber'
})
export class PipenumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return isNaN(value) ? value : new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(value));
  }

}
