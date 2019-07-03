import { Component, OnInit } from "@angular/core";
import { IssuerInformation } from "src/app/models/issuer-information.model";

@Component({
  selector: "app-issuer-card",
  templateUrl: "./issuer-card.component.html",
  styleUrls: ["./issuer-card.component.scss"]
})
export class IssuerCardComponent implements OnInit {
  public issuerInfo: IssuerInformation = {
    name: "Tarek Jellali",
    address: "22 build street",
    phone: "0655555555",
    mail: "tarek@company.com",
    siret: "00000000000000",
    postalCode: "75000",
    town: "Paris"
  };

  constructor() {}

  ngOnInit() {}
}
