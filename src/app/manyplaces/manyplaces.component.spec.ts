import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyplacesComponent } from './manyplaces.component';

describe('ManyplacesComponent', () => {
  let component: ManyplacesComponent;
  let fixture: ComponentFixture<ManyplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
