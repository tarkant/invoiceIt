import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-client-card",
  templateUrl: "./client-card.component.html",
  styleUrls: ["./client-card.component.scss"]
})
export class ClientCardComponent implements OnInit {
  public clientInfo = {
    name: null,
    company: "ACME Inc.",
    address: "44 downtown street",
    postalCode: "75000",
    town: "Paris",
    phone: null
  };
  constructor() {}

  ngOnInit() {}
}
