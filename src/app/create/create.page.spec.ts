import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreatePage } from "./create.page";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

describe("CreatePage", () => {
  const mockAngularFirestore = {
    collection: name => {
      return {
        valueChanges: () => {
          return new Observable(null);
        }
      };
    }
  };

  let component: CreatePage;
  let fixture: ComponentFixture<CreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: AngularFirestore, useValue: mockAngularFirestore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
