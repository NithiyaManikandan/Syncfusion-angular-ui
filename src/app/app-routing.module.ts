import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreegridComponent } from './treegrid/treegrid.component';
import { GridComponent } from './grid/grid.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { FormComponent } from './form/form.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'treeGrid',
    component: TreegridComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: 'textEditor',
    component: FileViewerComponent,
  },
  {
    path:'chart',
    component:ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
