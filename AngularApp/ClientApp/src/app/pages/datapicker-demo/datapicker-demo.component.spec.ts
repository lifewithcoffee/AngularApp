import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapickerDemoComponent } from './datapicker-demo.component';

describe('DatapickerDemoComponent', () => {
  let component: DatapickerDemoComponent;
  let fixture: ComponentFixture<DatapickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapickerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
