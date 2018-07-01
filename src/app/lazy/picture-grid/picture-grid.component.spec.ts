import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureGridComponent } from './picture-grid.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PictureGridComponent', () => {
  let component: PictureGridComponent;
  let fixture: ComponentFixture<PictureGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureGridComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
