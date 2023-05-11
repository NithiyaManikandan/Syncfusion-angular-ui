import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  public chartData: any[] | undefined;
  public primaryXAxis: Object | undefined;
  public primaryYAxis: Object | undefined;
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.chartData = res as any;
    });
    this.primaryXAxis = {
      valueType: 'Category',
    };
    this.primaryYAxis = {
      labelFormat: '${value}K',
    };
  }
}
