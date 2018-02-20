import { ElementTableEvent, ElementTable } from "./element";

export interface Table {
  columns: Column[];
  search?: SearchConfig;
  style?: StyleTable;
  action?: Action;
}

export interface Action {
  edit: boolean;
  trash: boolean;
}

export interface StyleTable {
  classNameContainer?: string;
  classNameTable?: string;
  classNameTableHead?: string;
}

export interface SearchConfig {
  nameData: string[];
}



export interface Column {
  title: string;
  nameData?: string;
  extend?: Extend;
  icon?: {
    active: boolean;
    icon: string;
  };
  order?: {
    active: boolean;
    current?: OrderEnum;
  };
  style?: {
    className?: string;
  };
}

export enum OrderEnum {
  decreasing = 0,
  ascending = 1
}

export interface CustomEvent {
  type: ElementTable;
  object?: any;
  value?: any;
}

export interface Extend {
  mathValueToString?: {
    resultView: string[];
    nameDatas: any[];
    expected: any[];
    default: string;
    join?: boolean;
  };

  element?: {
    el: ElementTable;
    className?: string;
    text?: string;
    placeholder?: string;
    event: ElementTableEvent;
    hideIf?: Function;
    disabledIf?: Function;
    onCreate?: Function;
  };

  idToView?: {
    list: object[];
    idList: string;
    idObject: string;
    nameData: string;
  };

}

export interface Pagination {
  arrayPages?: Array<number>;
  totalDeItens?: number;
  numeroDePaginas?: number;
  limitePorPagina: number;
  paginaAtual: number;
}

export interface RemoveTable {
  hasRemove: boolean;
  nameData: string;
}
