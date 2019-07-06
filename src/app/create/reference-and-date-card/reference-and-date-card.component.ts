import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { ReferenceAndDate } from "src/app/models/reference-and-date.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reference-and-date-card",
  templateUrl: "./reference-and-date-card.component.html",
  styleUrls: ["./reference-and-date-card.component.scss"]
})
export class ReferenceAndDateCardComponent implements OnInit, OnChanges {
  @Input()
  public refAndDate: ReferenceAndDate = {
    reference: "00001",
    date: new Date(Date.now())
  };

  @Output()
  public refAndDateChange = new EventEmitter<ReferenceAndDate>();

  public dateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      date: [null, Validators.required]
    });
    this.dateForm.controls.date.setValue(this.refAndDate.date);
    this.dateForm.controls.date.valueChanges.subscribe(dateValue => {
      this.refAndDate.date = dateValue;
      this.refAndDateChange.emit(this.refAndDate);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.refAndDate !== undefined) {
      this.refAndDate = changes.refAndDate.currentValue;
    }
  }
}
