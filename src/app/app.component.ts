import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "Accueil",
      url: "/home",
      icon: "home"
    },
    {
      title: "Liste",
      url: "/list",
      icon: "list"
    },
    {
      title: "Créer une facture/devis",
      url: "/create",
      icon: "add-circle"
    },
    {
      title: "Clients",
      url: "/clients",
      icon: "people"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
