import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Column } from './models/Column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit
{
  private cols: Object[] = [];
  @Input() private data;

  ngOnInit()
  {
    this.buildColumns();
  }

  private buildColumns()
  {
    this.data.columns.forEach(
      (column) => {
        this.pushToColumns(column, column);
      });
  }

  private pushToColumns(field, header)
  {
    this.cols.push(this.columnsFormat(field, header));
  }

  private columnsFormat(field: string | number, header: string | number)
  {
    return { field: field, header: header };
  }

}
