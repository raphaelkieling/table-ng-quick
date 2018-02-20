import { TableConfigService } from './components/table/service/table-config.service';
import { Table, } from './components/table/model/table';
import { Component } from '@angular/core';
import { ElementTableEvent, ElementTable } from './components/table/model/element';

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
    { id: '2', nome: 'damiao', administrator: 'dondomino', trabalho: { nome: 'Desenveolvedor' } },
    { id: '3', nome: 'julia', administrator: true }
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
        },
        {
          title: 'Ação',
          extend: {
            element: {
              el: ElementTable.Button,
              text: 'Hello',
              className: 'bt btn-primary form-control',
              event: ElementTableEvent.OnClick
            }
          }
        },
        {
          title: 'Input',
          extend: {
            element: {
              el: ElementTable.Input,
              placeholder: 'HEHHE',
              text: 'Hello',
              className: 'form-control',
              event: ElementTableEvent.Blur,
              onCreate: (objeto, el) => {
                if (objeto.nome == 'raphael') {
                  el.placeholder = 'PUTA QE PAR'
                }

                return el;
              },
              disabledIf: (objeto) => {
                return objeto.nome == 'damiao';
              }
            }
          }
        }
      ]
    };

  }



  out(e) {
    console.log(e);
  }

}
