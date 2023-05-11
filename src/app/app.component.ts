import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { expectedValue } from '../response';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public data: object[] | undefined;
  public pageSettings: PageSettingsModel | undefined;
  public headerText: Object | any = [
    { text: 'Form' },
    { text: 'Employee Table' },
    { text: 'Employee chart' },
  ];
  constructor(private route: Router) {}
  content0: any;
  content2: any;
  content1: any;
  ngOnInit(): void {
    this.data = expectedValue;
    this.pageSettings = { pageSize: 6 };
  }
}
