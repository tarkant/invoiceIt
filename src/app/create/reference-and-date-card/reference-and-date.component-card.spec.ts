import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReferenceAndDateCardComponent } from "./reference-and-date-card.component";

describe("ReferenceAndDateComponent", () => {
  let component: ReferenceAndDateCardComponent;
  let fixture: ComponentFixture<ReferenceAndDateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceAndDateCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
