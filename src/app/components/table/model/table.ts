export interface Table {
  columns: Column[];
  search?: SearchConfig;
  style?: {
    classNameContainer?: string;
    classNameTable?: string;
    classNameTableHead?: string;
  };
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

export interface Extend {
  mathValueToString?: {
    resultView: string[];
    nameDatas: any[];
    expected: any[];
    default: string;
    join?: boolean;
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
