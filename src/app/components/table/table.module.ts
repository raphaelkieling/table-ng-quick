import { FilterTablePipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableConfigService } from './service/table-config.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TableComponent,
    FilterTablePipe
  ],
  exports: [TableComponent],
  providers: [TableConfigService]
})
export class TableModule { }
