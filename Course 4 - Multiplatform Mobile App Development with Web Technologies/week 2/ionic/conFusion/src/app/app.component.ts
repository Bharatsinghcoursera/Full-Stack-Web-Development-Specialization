import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { MenuPage } from '../pages/menu/menu';
import { ContactusPage } from '../pages/contactus/contactus';
import { LoginPage } from '../pages/login/login';
import { ReservePage } from '../pages/reserve/reserve';
import { FavoritesPage } from '../pages/favorites/favorites';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  loginModal: any = LoginPage;
  reserveModal: any = ReservePage;

  pages: Array<{ title: string, component: any }>;
  modals: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About Us', component: AboutusPage },
      { title: 'Menu', component: MenuPage },
      { title: 'Contact Us', component: ContactusPage },
      { title: 'My Favorites', component: FavoritesPage}
    ];

    this.modals = [
      { title: 'Login', component: LoginPage },
      { title: 'Reserve Table', component: ReservePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage.component);
    modal.present();
  }
}
