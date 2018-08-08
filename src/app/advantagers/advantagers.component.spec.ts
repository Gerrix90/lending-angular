import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagersComponent } from './advantagers.component';

describe('AdvantagersComponent', () => {
  let component: AdvantagersComponent;
  let fixture: ComponentFixture<AdvantagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
