import { Component, OnInit } from '@angular/core';
import { expectedValue1 } from 'src/response';

@Component({
  selector: 'app-treegrid',
  templateUrl: './treegrid.component.html',
  styleUrls: ['./treegrid.component.scss'],
})
export class TreegridComponent implements OnInit {
  public data: object[] | undefined;
  sortSettings: any | undefined;
  ngOnInit(): void {
    this.data = expectedValue1;
    this.sortSettings = {
      columns: [
        { field: 'firstName', direction: 'Ascending' },
        { field: 'empId', direction: 'Descending' },
      ],
    };
  }
}
