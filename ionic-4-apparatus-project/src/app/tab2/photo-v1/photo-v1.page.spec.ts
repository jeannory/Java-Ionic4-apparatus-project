import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1Page } from './photo-v1.page';

describe('PhotoV1Page', () => {
  let component: PhotoV1Page;
  let fixture: ComponentFixture<PhotoV1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
