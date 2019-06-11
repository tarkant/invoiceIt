import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceItem } from 'src/app/models/invoice-item.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-items-list',
  templateUrl: './invoice-items-list.component.html',
  styleUrls: ['./invoice-items-list.component.scss'],
})
export class InvoiceItemsListComponent implements OnInit {


  @Input()
  public invoiceItems: Array<InvoiceItem> = [];

  @Output()
  public invoiceItemsChange = new EventEmitter<InvoiceItem[]>();

  public newItem: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newItem = this.formBuilder.group({
      date: [null, Validators.required],
      hoursCount: [0],
      description: ['', Validators.required],
      unitPrice: [null, Validators.required],
      vat: [0],
      price: [0]
    })
  }

  public addItem() {
    this.invoiceItems.push({
      date: this.newItem.controls.date.value,
      hoursCount: this.newItem.controls.hoursCount.value,
      description: this.newItem.controls.description.value,
      unitPrice: this.newItem.controls.unitPrice.value,
      vat: this.newItem.controls.vat.value,
      price: this.newItem.controls.price.value,
    });
    this.invoiceItemsChange.emit(this.invoiceItems);
    this.newItem.reset();
  }

  public editItem(item: InvoiceItem) {
    this.newItem.controls.date.setValue(item.date);
    this.newItem.controls.hoursCount.setValue(item.hoursCount);
    this.newItem.controls.description.setValue(item.description);
    this.newItem.controls.unitPrice.setValue(item.unitPrice);
    this.newItem.controls.vat.setValue(item.vat);
    this.newItem.controls.price.setValue(item.price);
  }
}
