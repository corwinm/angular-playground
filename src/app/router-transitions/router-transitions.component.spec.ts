import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTransitionsComponent } from './router-transitions.component';

describe('RouterTransitionsComponent', () => {
  let component: RouterTransitionsComponent;
  let fixture: ComponentFixture<RouterTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
