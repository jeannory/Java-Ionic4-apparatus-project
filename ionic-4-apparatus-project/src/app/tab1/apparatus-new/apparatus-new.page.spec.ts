import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusNewPage } from './apparatus-new.page';

describe('ApparatusNewPage', () => {
  let component: ApparatusNewPage;
  let fixture: ComponentFixture<ApparatusNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
