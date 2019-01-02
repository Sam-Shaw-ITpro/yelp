import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneplaceComponent } from './oneplace.component';

describe('OneplaceComponent', () => {
  let component: OneplaceComponent;
  let fixture: ComponentFixture<OneplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
