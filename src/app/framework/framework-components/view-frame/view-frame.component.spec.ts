import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFrameComponent } from './view-frame.component';

describe('ViewFrameComponent', () => {
  let component: ViewFrameComponent;
  let fixture: ComponentFixture<ViewFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
