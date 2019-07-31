import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

/**
 * Fetches for the app the basic needed data such as :
 * * The settings
 * * The invoices list
 */
@Injectable({
  providedIn: "root"
})
export class MainService {
  constructor() {}
}
