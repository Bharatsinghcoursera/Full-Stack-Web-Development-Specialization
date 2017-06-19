import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DishesPage } from '../dishes/dishes'

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  tab1 = DishesPage;
  tab1Params = "";

  tab2 = DishesPage;
  tab2Params = "appetizer";

  tab3 = DishesPage;
  tab3Params = "mains";

  tab4 = DishesPage;
  tab4Params = "dessert";
    
  constructor(public navCtrl: NavController) {
  }

}