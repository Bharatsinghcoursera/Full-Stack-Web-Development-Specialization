import { Component } from '@angular/core';

import { ViewController, NavParams } from 'ionic-angular';

import { AppService } from '../../app/app.service';

@Component({
  selector: 'page-dishdetailsPopover',
  templateUrl: 'popover.html',
})
export class DishdetailsPopoverPage {

  selectedDish: any;
  
  constructor(public viewCtrl: ViewController, public appService: AppService, public navParams: NavParams) {
    this.selectedDish= navParams.get('dish');
  }

  addFavorite(dish) {
    this.appService.addFavorite(dish.id)
      .subscribe(
      data => console.log(data),
      error => console.error('Error: ' + error),  
    );
    this.close();
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
