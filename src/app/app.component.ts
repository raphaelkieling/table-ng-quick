import { Table } from './components/table/model/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dados = [
    { id: '1', nome: 'raphael' },
    { id: '1', nome: 'raphael', administrator: 'dondomino', trabalho: { nome: 'Desenveolvedor' } },
    { id: '1', nome: 'raphael', administrator: true }
  ];
  config: Table;

  constructor() {
    this.config = {
      style: {
        classNameContainer: 'table-responsive',
        classNameTable: 'table table-hover',
        classNameTableHead: 'thead-dark'
      },
      columns: [
        { title: 'Nome', nameData: 'nome' },
        { title: 'Job', nameData: 'trabalho.nome' },
        {
          title: 'Admin', extend: {
            mathValueToString: {
              default: '',
              nameDatas: ['administrator'],
              expected: ['dondomino', false],
              resultView: ['Administrador', 'Funcionario']
            }
          }
        }
      ]
    }
  }

  out(e) {
    console.log(e);
  }
}
