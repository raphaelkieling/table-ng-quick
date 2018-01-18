import { Pipe, PipeTransform } from '@angular/core';
import { PegaValorDaPropriedadeComDotNotation, removerAcentos } from './helper';

@Pipe({ name: 'filter' })
export class FilterTablePipe implements PipeTransform {
  transform(dados: Array<any>, filtro: string, nameData: string[]): any {

    if (filtro.length >= 1) {
      return dados.filter((el) => {

        const palavraDoObjeto: string[] = [];
        nameData.forEach((name) => {
          palavraDoObjeto.push(removerAcentos(PegaValorDaPropriedadeComDotNotation(el, name).toString()));
        });

        const palavraFinalConcatenada: string = palavraDoObjeto.join('');
        return (palavraFinalConcatenada.toLocaleLowerCase().includes(removerAcentos(filtro.toLocaleLowerCase())));
      });
    } else {
      return dados;
    }

  }
}
