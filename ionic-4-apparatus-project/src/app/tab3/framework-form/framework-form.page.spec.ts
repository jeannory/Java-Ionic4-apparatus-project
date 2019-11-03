import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkFormPage } from './framework-form.page';

describe('FrameworkFormPage', () => {
  let component: FrameworkFormPage;
  let fixture: ComponentFixture<FrameworkFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
