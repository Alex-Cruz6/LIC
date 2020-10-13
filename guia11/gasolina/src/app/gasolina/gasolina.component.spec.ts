/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GasolinaComponent } from './gasolina.component';

describe('GasolinaComponent', () => {
  let component: GasolinaComponent;
  let fixture: ComponentFixture<GasolinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasolinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
