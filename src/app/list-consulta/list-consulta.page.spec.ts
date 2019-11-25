import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultaPage } from './list-consulta.page';

describe('ListConsultaPage', () => {
  let component: ListConsultaPage;
  let fixture: ComponentFixture<ListConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
