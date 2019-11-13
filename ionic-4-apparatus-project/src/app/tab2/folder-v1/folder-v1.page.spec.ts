import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderV1Page } from './folder-v1.page';

describe('FolderV1Page', () => {
  let component: FolderV1Page;
  let fixture: ComponentFixture<FolderV1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderV1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderV1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
