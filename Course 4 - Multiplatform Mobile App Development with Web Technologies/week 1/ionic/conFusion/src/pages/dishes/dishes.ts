import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DishdetailsPage } from '../dishdetails/dishdetails';

@Component({
  selector: 'page-dishes',
  templateUrl: 'dishes.html',
})
export class DishesPage {

  dishes: Array<{ name: string }>;
  
  constructor(public navCtrl: NavController) {

    this.dishes = [];
    for (let i = 1; i < 11; i++) {
      this.dishes.push({
        name: 'Dish ' + i
      });
    }

  }

  itemTapped(event, dish) {

    this.navCtrl.push(DishdetailsPage, {
      dish: dish
    });
    
  }

}
