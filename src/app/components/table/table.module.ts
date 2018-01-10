import { FilterTablePipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [TableComponent,
    FilterTablePipe
  ],
  exports: [TableComponent]
})
export class TableModule { }
