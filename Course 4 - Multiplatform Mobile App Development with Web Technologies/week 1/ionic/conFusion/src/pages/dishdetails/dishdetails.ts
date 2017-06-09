import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dishdetails',
  templateUrl: 'dishdetails.html',
})
export class DishdetailsPage {

  selectedDish: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.selectedDish = navParams.get('dish');
    
  }

}
