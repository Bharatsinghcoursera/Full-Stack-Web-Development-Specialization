import { Component } from '@angular/core';

import { ViewController, NavParams, ModalController } from 'ionic-angular';

import { AppService } from '../../app/app.service';
import { CommentPage } from './modal';

@Component({
  selector: 'page-dishdetailsPopover',
  templateUrl: 'popover.html',
})
export class DishdetailsPopoverPage {

  selectedDish: any;
  
  constructor(public viewCtrl: ViewController, public appService: AppService, public navParams: NavParams, public modalCtrl: ModalController) {
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

  presentAddCommentModal(dish) {
    this.close();
    let modal = this.modalCtrl.create(CommentPage, { dish: this.selectedDish });
    modal.present();
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
