import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScedulerComponent } from './sceduler.component';

describe('ScedulerComponent', () => {
  let component: ScedulerComponent;
  let fixture: ComponentFixture<ScedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
