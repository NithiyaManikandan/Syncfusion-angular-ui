import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PageService,
  SortService,
  FilterService,
  GroupService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreegridComponent } from './treegrid/treegrid.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { GridComponent } from './grid/grid.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  RichTextEditorAllModule,
} from '@syncfusion/ej2-angular-richtexteditor';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ChartComponent } from './chart/chart.component';
import {
  CategoryService,
  ChartModule,
  DataLabelService,
  LegendService,
  LineSeriesService,
  TooltipService,
} from '@syncfusion/ej2-angular-charts';
import { SidebarModule, TabModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { ToastComponent } from './toast/toast.component';
@NgModule({
  declarations: [
    AppComponent,
    TreegridComponent,
    GridComponent,
    FileViewerComponent,
    FormComponent,
    ChartComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    TreeGridModule,
    RichTextEditorAllModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownListModule,
    DatePickerModule,
    ChartModule,
    SidebarModule,
    TabModule,
    ToastModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    CategoryService,
    LegendService,
    TooltipService,
    DataLabelService,
    LineSeriesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
