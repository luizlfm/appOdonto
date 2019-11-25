import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritoPage } from './restrito.page';

describe('RestritoPage', () => {
  let component: RestritoPage;
  let fixture: ComponentFixture<RestritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestritoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
