import { SearchConfig } from './../model/table';
import { Injectable } from '@angular/core';
import { StyleTable } from '../model/table';

@Injectable()
export class TableConfigService {
  public style: StyleTable;
  public search: SearchConfig;
}
