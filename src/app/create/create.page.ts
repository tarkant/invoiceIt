import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-create",
  templateUrl: "./create.page.html",
  styleUrls: ["./create.page.scss"]
})
export class CreatePage implements OnInit {
  private invoicesList: AngularFirestoreCollection<any>;
  item: Observable<any>;

  constructor(private angularFireStore: AngularFirestore) {}

  ngOnInit() {
    this.invoicesList = this.angularFireStore.collection<any>("invoices");
    this.item = this.invoicesList.valueChanges();
    this.item.subscribe(val => console.log(val));
  }
}
