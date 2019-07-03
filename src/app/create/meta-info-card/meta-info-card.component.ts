import { Component, OnInit } from "@angular/core";
import { MetaInformation } from "src/app/models/invoice-meta-information.model";

@Component({
  selector: "app-meta-info-card",
  templateUrl: "./meta-info-card.component.html",
  styleUrls: ["./meta-info-card.component.scss"]
})
export class MetaInfoCardComponent implements OnInit {
  public metaInfo: MetaInformation = {
    PSE1: "XXXXXXXXXXXX",
    applyVat: false,
    degreeBEESAN: "XXXAFFWWWW",
    insuranceCode: "69AAFF1D0175"
  };

  constructor() {}

  ngOnInit() {}
}
