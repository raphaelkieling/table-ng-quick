import { Table } from './components/table/model/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = 'app';

  dados = [
    { id: '1', nome: 'raphael' },
    { id: '1', nome: 'damiao', administrator: 'dondomino', trabalho: { nome: 'Desenveolvedor' } },
    { id: '1', nome: 'julia', administrator: true }
  ];
  config: Table;

  constructor() {
    this.config = {
      style: {
        classNameContainer: 'table-responsive',
        classNameTable: 'table table-hover'
      },
      search: {
        nameData: ['trabalho.nome']
      },
      columns: [
        { title: 'Nome', nameData: 'nome', order: { active: true }, icon: { active: true , icon: 'archive'} },
        { title: 'Job', nameData: 'trabalho.nome', order: { active: true } },
        {
          title: 'Admin', extend: {
            mathValueToString: {
              default: '',
              nameDatas: ['administrator'],
              expected: ['dondomino', false],
              resultView: ['Administrador', 'Funcionario']
            }
          },
          order: { active: true }
        }
      ]
    };

  }



  out(e) {
    console.log(e);
  }
}
