import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreatePage } from "./create.page";
import { InvoiceItemsListComponent } from "./invoice-items-list/invoice-items-list.component";
import { IssuerCardComponent } from "./issuer-card/issuer-card.component";
import { ClientCardComponent } from "./client-card/client-card.component";
import { ReferenceAndDateCardComponent } from "./reference-and-date-card/reference-and-date-card.component";
import { MetaInfoCardComponent } from "./meta-info-card/meta-info-card.component";

const routes: Routes = [
  {
    path: "",
    component: CreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CreatePage,
    InvoiceItemsListComponent,
    IssuerCardComponent,
    ClientCardComponent,
    ReferenceAndDateCardComponent,
    MetaInfoCardComponent
  ]
})
export class CreatePageModule {}
