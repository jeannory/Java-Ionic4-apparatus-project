import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusesPage } from './apparatuses.page';

describe('ApparatusesPage', () => {
  let component: ApparatusesPage;
  let fixture: ComponentFixture<ApparatusesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
