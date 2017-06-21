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
import { DishdetailsPopoverPage } from '../pages/dishdetails/popover';
import { CommentPage } from '../pages/dishdetails/modal';
import { ContactusPage } from '../pages/contactus/contactus';
import { LoginPage } from '../pages/login/login';
import { ReservePage } from '../pages/reserve/reserve';
import { FavoritesPage, FavoritePipe } from '../pages/favorites/favorites';

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
    DishdetailsPopoverPage,
    CommentPage,
    ContactusPage,
    DishPipe,
    OrderByPipe,
    LoginPage,
    ReservePage,
    FavoritesPage,
    FavoritePipe
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
    DishdetailsPopoverPage,
    CommentPage,
    ContactusPage,
    LoginPage,
    ReservePage,
    FavoritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppService
  ]
})
export class AppModule {}
