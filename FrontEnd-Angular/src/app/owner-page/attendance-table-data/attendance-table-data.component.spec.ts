import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTableDataComponent } from './attendance-table-data.component';

describe('AttendanceTableDataComponent', () => {
  let component: AttendanceTableDataComponent;
  let fixture: ComponentFixture<AttendanceTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceTableDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
