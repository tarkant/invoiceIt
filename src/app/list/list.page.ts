import { Component, OnInit } from "@angular/core";
import { InvoiceListItem } from "../models/invoice-list-item.model";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  public items: Array<InvoiceListItem> = [
    {
      refAndDate: {
        date: new Date(Date.now()),
        reference: `INV0001`
      },
      clientInfo: {
        address: `21 Jump street`,
        company: `ACME Inc`,
        name: `Joe`,
        phone: ``,
        postalCode: `78200`,
        town: `Sometown`
      },
      total: 4000,
      unit: `€`
    },
    {
      refAndDate: {
        date: new Date(Date.now()),
        reference: `INV0002`
      },
      clientInfo: {
        address: `22 Jump street`,
        company: `ACME Inc`,
        name: `Joe`,
        phone: ``,
        postalCode: `78200`,
        town: `Sometown`
      },
      total: 900,
      unit: `€`
    }
  ];

  constructor() {}

  public ngOnInit() {}
}
