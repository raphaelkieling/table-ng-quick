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
- :point_right: *data* `Array of data to list in table`
- :point_right: *config* `Config table object is _Table_`
- :point_right: *search* `Search to word  > tip: bind one variable here`
- :point_right: *id* `Default id is a id td but if is different set [id]='other id name'`
- :point_right: *activeAction* `Active edit and trash icons`
- :point_right: *select* `Select on click,  return object in selected output`

- :point_left: *delete* `Emit a delete event empty to use function in html`
- :point_left: *edit*  `Emit a edit event empty to use function in html`

- :point_left: *selected* `Emit object selected`
- :point_left: *selectedDoubleClick* `Emit object double click selected`

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
