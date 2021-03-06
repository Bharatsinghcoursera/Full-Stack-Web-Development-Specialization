import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AppService } from './app.service';
import { HomePage } from '../pages/home/home';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { MenuPage } from '../pages/menu/menu';
import { DishesPage, DishPipe } from '../pages/dishes/dishes';
import { DishdetailsPage, OrderByPipe } from '../pages/dishdetails/dishdetails';
import { ContactusPage } from '../pages/contactus/contactus';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutusPage,
    MenuPage,
    DishesPage,
    DishdetailsPage,
    ContactusPage,
    DishPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutusPage,
    MenuPage,
    DishesPage,
    DishdetailsPage,
    ContactusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppService
  ]
})
export class AppModule {}
