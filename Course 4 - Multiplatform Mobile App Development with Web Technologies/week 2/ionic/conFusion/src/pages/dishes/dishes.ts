import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { AppService } from '../../app/app.service';
import { AppSetting } from '../../app/app.setting';

import { DishdetailsPage } from '../dishdetails/dishdetails';

@Pipe({
    name: 'DishPipe',
    pure: false
})
export class DishPipe implements PipeTransform {
    transform(dishes: any[], category: Object): any {
        if (!dishes || !category || category === '') {
            return dishes;
        }
        
        return dishes.filter(dish => dish.category === category);
    }
}

@Component({
  selector: 'page-dishes',
  templateUrl: 'dishes.html'
})
export class DishesPage {

  baseUrl: string = AppSetting.BASE_URL;  
  dishes: any;
  filtText: string = '';

  constructor(public navCtrl: NavController, public appService: AppService, public navParams: NavParams, public app: App) {
    this.filtText = navParams.data; 
  }
  
  ngOnInit(){
    this.appService.getDishes()
      .subscribe(
        data => this.dishes = data,
        error => console.error('Error: ' + error),
      );
  }

  itemTapped(event, dish) {
    this.app.getRootNav().push(DishdetailsPage, {
      dish: dish
    });
    
  }

}
