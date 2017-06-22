import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';

import { AppSetting } from '../../app/app.setting';

import { DishdetailsPopoverPage } from './popover';

@Pipe({
  name: "OrderByPipe"
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>, field: string): Array<any> {
    var desc = false;

    if(array == null) {
      return null;
    }

    if (field.startsWith("-")) {
      field = field.substring(1);
      desc = true;
    }
  
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });

    if (desc) return array.reverse();
    
    return array;
  }
}

@Component({
  selector: 'page-dishdetails',
  templateUrl: 'dishdetails.html',
})
export class DishdetailsPage {

  baseUrl: string = AppSetting.BASE_URL;  
  selectedDish: any; 
  orderText = "";

  constructor(public navParams: NavParams, public popoverCtrl: PopoverController) {
    
    this.selectedDish = navParams.get('dish');
    
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(DishdetailsPopoverPage, { dish: this.selectedDish });
    popover.present({
      ev: myEvent
    });
  }

}
