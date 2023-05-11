import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @ViewChild('element') element: any;
  public position = { X: 'Right' };
  ngOnInit(): void {
    this.btnClick();
  }
  onCreate() {
    this.element.show();
  }
  btnClick() {
    this.element.show();
  }
}
