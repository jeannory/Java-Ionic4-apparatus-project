import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusSingleV1Page } from './apparatus-single-v1.page';

describe('ApparatusSingleV1Page', () => {
  let component: ApparatusSingleV1Page;
  let fixture: ComponentFixture<ApparatusSingleV1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusSingleV1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusSingleV1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
