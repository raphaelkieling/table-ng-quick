import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Table, Column, OrderEnum } from './model/table';
import { Output } from '@angular/core';
import { PegaValorDaPropriedadeComDotNotation } from './helper';
import { TableConfigService } from './service/table-config.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'table-ng',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: object[] = [];
  @Input() config: Table;
  @Input() search = '';
  @Input() id = 'id';
  @Input() activeAction = true;
  @Input() select = false;
  @Input() set displayNRows(value) {
    this._nRows = value;
  }

  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  @Output() selected = new EventEmitter<any>();
  @Output() selectedDoubleClick = new EventEmitter<any>();

  public _nRows = null;
  private _selected = {};

  constructor(private tableConfigS: TableConfigService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.config.search = this.config.search ? this.config.search : this.tableConfigS.search;
    this.config.style = this.config.style ? this.config.style : this.tableConfigS.style;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(change) {
    if (change.data) {
      this.data = change.data.currentValue;
    }
  }

  deleteEvent(id) {
    this.delete.emit(id);
  }

  editEvent(objeto) {
    this.edit.emit(objeto);
  }

  addClassSelecionado(objeto) {
    if (!this.select) {
      return false;
    }

    this._selected = objeto;
    this.enviaSelecionadoParaFora();
  }

  enviaSelecionadoParaFora() {
    this.selected.emit(this._selected);
  }

  emiteObjetoClickDuplo(objeto) {
    this.selectedDoubleClick.emit(objeto);
  }

  isSelected(objeto): boolean {
    return objeto === this._selected;
  }

  transformaObjetoNomeData(objeto, stringData) {
    return typeof PegaValorDaPropriedadeComDotNotation(objeto, stringData) !==
      'object'
      ? PegaValorDaPropriedadeComDotNotation(objeto, stringData)
      : '';
  }

  renderString(objeto: object, coluna: Column): string {
    if (coluna.extend) {
      return this.configColumn(objeto, coluna);
    }
    return this.transformaObjetoNomeData(objeto, coluna.nameData);
  }

  renderClass(coluna: Column) {
    if (coluna && coluna.style) {
      const { className } = coluna.style;
      // tslint:disable-next-line:curly
      if (className) return className;
    }
    return '';
  }

  configColumn(objeto, coluna: Column): string {
    if (coluna.extend.mathValueToString) {
      return this.mathValueToString(objeto, coluna);
    }

    if (coluna.extend.idToView) {
      return this.idToView(coluna, objeto);
    }
  }

  private idToView(coluna: Column, objeto: any) {
    const idToView = coluna.extend.idToView;
    const list = idToView.list;
    const filter = list.filter(elemento => {
      const id = this.transformaObjetoNomeData(elemento, idToView.idList);
      const valorAtual = this.transformaObjetoNomeData(objeto, idToView.idObject);
      if (id === valorAtual) {
        return true;
      }
      return false;
    })[0];
    return this.transformaObjetoNomeData(filter, idToView.nameData);
  }

  mathValueToString(objeto, coluna) {
    const mathValueToString = coluna.extend.mathValueToString;
    const resultColumn: string[] = mathValueToString.nameDatas.map(nameData =>
      this.transformaObjetoNomeData(objeto, nameData)
    );
    const resultMaths: string[] = this.transformInExpectedValue(mathValueToString, resultColumn);

    if (resultMaths.length > 0) {
      if (mathValueToString.join) {
        return resultMaths.join(' / ');
      }
      return resultMaths[0];
    } else {
      return mathValueToString.default;
    }
  }


  private transformInExpectedValue(mathValueToString: any, resultColumn: string[]) {
    const resultMaths = [];
    mathValueToString.expected.forEach((valor, index) => {
      let indexForColumn = index;
      if (resultColumn.length === 1) {
        indexForColumn = 0;
      }
      if (valor === resultColumn[indexForColumn]) {
        resultMaths.push(mathValueToString.resultView[index]);
      }
    });

    return resultMaths;
  }

  order(column: Column) {
    if (column.order.current === undefined) {
      column.order.current = OrderEnum.ascending;
    }

    column.order.current = this.newOrderCurrent(column);

    this.orderData(column);

  }

  private newOrderCurrent(column: Column) {
    if (column.order.current === OrderEnum.ascending) {
      return OrderEnum.decreasing;
    } else {
      return OrderEnum.ascending;
    }
  }

  private orderData(column: Column) {
    this.data.sort((a, b) => {
      const nameDataA = this.transformaObjetoNomeData(a, column.nameData || '');
      const nameDataB = this.transformaObjetoNomeData(b, column.nameData || '');
      // tslint:disable-next-line:curly
      if (nameDataA < nameDataB)
        return column.order.current === OrderEnum.ascending ? -1 : 1;
      // tslint:disable-next-line:curly
      if (nameDataA > nameDataB)
        return column.order.current === OrderEnum.ascending ? 1 : -1;
      return 0;
    });
  }

  arrowOrderIconActual(currentOrder) {
    return OrderEnum.ascending === currentOrder ? 'arrow_drop_down' : 'arrow_drop_up';
  }
}
