import { Component } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-sceduler',
  templateUrl: './sceduler.component.html',
  styleUrls: ['./sceduler.component.scss'],
})
export class ScedulerComponent {
  setview: View = 'Month';
  setDate: Date = new Date(2023, 0, 15);
  public data: object[] = [
    {
      id: 2,
      eventName: 'Meeting',
      startTime: new Date(2023, 4, 15),
      endTime: new Date(2023, 4, 15),
      isAllDay: false,
    },
  ];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: 'id',
      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    },
  };
}
