import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanChooserComponent } from './plan-chooser.component';

describe('PlanChooserComponent', () => {
  let component: PlanChooserComponent;
  let fixture: ComponentFixture<PlanChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
