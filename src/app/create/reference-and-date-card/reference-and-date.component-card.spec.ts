import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReferenceAndDateCardComponent } from "./reference-and-date-card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

describe("ReferenceAndDateComponent", () => {
  let component: ReferenceAndDateCardComponent;
  let fixture: ComponentFixture<ReferenceAndDateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceAndDateCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceAndDateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
