# Table NG

### Todo
- [x] Search
- [x] Order per column :fire:
- [ ] Multi Select
- [x] Filter
- [x] Icon
- [ ] Alter table with input html


### Component parameters

*Legend*
- :point_right: Output
- :point_left: Input

*Parameters*
- :point_right: *data* 
- :point_right: *config*
- :point_right: *search*
- :point_right: *id* `Default id is a id td but if is different set [id]='other id name'`
- :point_right: *routeEdit*
- :point_right: *activeAction*
- :point_right: *select*

- :point_left: *delete* = new EventEmitter<any>();
- :point_left: *edit* = new EventEmitter<any>();

- :point_left: *selected* 
- :point_left: *selectedDoubleClick* = new EventEmitter<any>();
### Example easy

```typescript
export class AppComponent {
  data = [
    { id: '1', nome: 'raphael' },
    { id: '2', nome: 'damiao', administrator: 'dondomino', trabalho: { nome: 'Desenveolvedor' } },
    { id: '3', nome: 'julia', administrator: true }
  ];

  config: Table; //variable to config

  constructor() {
    this.config = {
      columns: [
        { title: 'Nome', nameData: 'nome'},
        { title: 'Job', nameData: 'trabalho.nome'}
      ]
    };

  }

  out(e) {
    console.log(e);
  }
}
```


### Example advanced
```typescript
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
        classNameContainer: 'table-responsive',  //if your use bootstrap example
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

```

### Html example

```html
<app-table [data]="data" [config]="config"></app-table>
```
