import { TableConfigService } from './components/table/service/table-config.service';
import { Table } from './components/table/model/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TableConfigService]
})
export class AppComponent {
  search = '';
  rows = 1;

  dados = [
    { id: '1', nome: 'raphael' },
    { id: '1', nome: 'damiao', administrator: 'dondomino', trabalho: { nome: 'Desenveolvedor' } },
    { id: '1', nome: 'julia', administrator: true }
  ];
  config: Table;

  constructor(private tbc: TableConfigService) {
    this.tbc.style = {
      classNameContainer: 'table-responsive',
      classNameTable: 'table table-hover'
    };

    this.config = {
      action: {
        trash: false,
        edit: true
      },
      search: {
        nameData: ['trabalho.nome', 'nome']
      },
      columns: [
        { title: 'Nome', nameData: 'nome', order: { active: true }, icon: { active: true, icon: 'archive' } },
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
