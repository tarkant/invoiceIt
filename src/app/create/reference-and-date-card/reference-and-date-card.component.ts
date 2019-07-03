import { Component, OnInit } from "@angular/core";
import { ReferenceAndDate } from "src/app/models/reference-and-date.model";

@Component({
  selector: "app-reference-and-date-card",
  templateUrl: "./reference-and-date-card.component.html",
  styleUrls: ["./reference-and-date-card.component.scss"]
})
export class ReferenceAndDateCardComponent implements OnInit {
  public refAndDate: ReferenceAndDate = {
    reference: "00001",
    date: new Date(Date.now())
  };
  constructor() {}

  ngOnInit() {}
}
