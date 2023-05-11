import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { expectedValue } from 'src/response';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  public data: object[] | undefined;
  public pageSettings: PageSettingsModel | undefined;
  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.data = res as any;
    });
    this.pageSettings = { pageSize: 6 };
  }
}
