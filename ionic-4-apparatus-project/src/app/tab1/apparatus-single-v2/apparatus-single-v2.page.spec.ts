import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusSingleV2Page } from './apparatus-single-v2.page';

describe('ApparatusSingleV2Page', () => {
  let component: ApparatusSingleV2Page;
  let fixture: ComponentFixture<ApparatusSingleV2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusSingleV2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusSingleV2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
