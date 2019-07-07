import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditonalComponent } from './additonal.component';

describe('AdditonalComponent', () => {
  let component: AdditonalComponent;
  let fixture: ComponentFixture<AdditonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
