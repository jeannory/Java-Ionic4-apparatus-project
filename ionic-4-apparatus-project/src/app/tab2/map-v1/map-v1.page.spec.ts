import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapV1Page } from './map-v1.page';

describe('MapV1Page', () => {
  let component: MapV1Page;
  let fixture: ComponentFixture<MapV1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapV1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapV1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
