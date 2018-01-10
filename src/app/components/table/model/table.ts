export interface Table {
  columns: Column[];
  search?: SearchConfig;
  style?: {
    classNameContainer: string;
    classNameTable: string;
    classNameTableHead:string;
  };
}

export interface SearchConfig {
  nameData: string[]
}

export interface Column {
  title: string;
  nameData?: string;
  extend?: Config;
  style?: {
    className?: string;
  };
}

export interface Config {
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
