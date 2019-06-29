import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceItem } from 'src/app/models/invoice-item.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Takes care of the item list loop & can be double-way binded
 * to be able to easily get its data.
 */
@Component({
  selector: 'app-invoice-items-list',
  templateUrl: './invoice-items-list.component.html',
  styleUrls: ['./invoice-items-list.component.scss'],
})
export class InvoiceItemsListComponent implements OnInit {


  @Input()
  public invoiceItems: Array<InvoiceItem> = [];

  @Input()
  public unit: string = '€';

  @Output()
  public invoiceItemsChange = new EventEmitter<InvoiceItem[]>();

  public newItem: FormGroup;

  public total: number = 0;

  public vat: number = 20;

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
    console.log(this.invoiceItems);
  }

  public editItem(item: InvoiceItem) {
    this.newItem.controls.date.setValue(item.date);
    this.newItem.controls.hoursCount.setValue(item.hoursCount);
    this.newItem.controls.description.setValue(item.description);
    this.newItem.controls.unitPrice.setValue(item.unitPrice);
    this.newItem.controls.vat.setValue(item.vat);
    this.newItem.controls.price.setValue(item.price);
  }

  public deleteItem(item: InvoiceItem) {
    const index = this.invoiceItems.indexOf(item);
    this.invoiceItems.splice(index, 1);
  }

  public calcTotal(): number {
    if (this.invoiceItems.length > 0) {
      return this.invoiceItems.map(el => el.price).reduce((acc, val) => acc + val, 0);
    } else {
      return 0;
    }
  }
}
