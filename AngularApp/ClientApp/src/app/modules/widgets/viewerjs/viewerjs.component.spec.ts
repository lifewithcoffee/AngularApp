import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerjsComponent } from './viewerjs.component';

describe('ViewerjsComponent', () => {
  let component: ViewerjsComponent;
  let fixture: ComponentFixture<ViewerjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
