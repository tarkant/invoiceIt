import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemsListComponent } from './invoice-items-list.component';
import { IonicModule } from '@ionic/angular';

describe('InvoiceItemsListComponent', () => {
  let component: InvoiceItemsListComponent;
  let fixture: ComponentFixture<InvoiceItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceItemsListComponent ],
      imports: [
        IonicModule,
        ReactiveFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Total should be 0 on 0 items', () => {
    expect(component.calcTotal()).toEqual(0);
  });

  it('Total should be 0 with items with 0 price', () => {
    component.invoiceItems = [
      {
        date: null,
        description: null,
        hoursCount: 1,
        price: 0,
        unitPrice: 0,
        vat: 0,
      },
      {
        date: null,
        description: null,
        hoursCount: 1,
        price: 0,
        unitPrice: 0,
        vat: 0,
      },
    ];
    expect(component.calcTotal()).toEqual(0);
  });

  it('Total should be 40 with two items', () => {
    component.invoiceItems = [
      {
        date: null,
        description: null,
        hoursCount: 1,
        price: 30,
        unitPrice: 0,
        vat: 0,
      },
      {
        date: null,
        description: null,
        hoursCount: 1,
        price: 10,
        unitPrice: 0,
        vat: 0,
      },
    ];
    expect(component.calcTotal()).toEqual(40);
  });

  it('Total should be 42 with one item', () => {
    component.invoiceItems = [
      {
        date: null,
        description: null,
        hoursCount: 1,
        price: 42,
        unitPrice: 0,
        vat: 0,
      },
    ];
    expect(component.calcTotal()).toEqual(42);
  });
});
