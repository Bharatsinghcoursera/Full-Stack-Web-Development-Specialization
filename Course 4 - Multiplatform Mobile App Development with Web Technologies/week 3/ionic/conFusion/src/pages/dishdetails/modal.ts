import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { AppService } from '../../app/app.service';

@Component({
  selector: 'page-comment',
  templateUrl: 'modal.html'
})
export class CommentPage {

  comment: any = {};  
  selectedDish: any;
    
  constructor(public viewCtrl: ViewController, public navParams: NavParams, public appService: AppService) {
    this.selectedDish= navParams.get('dish');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addComment(dish) {
    this.comment.date = new Date().toISOString();
    dish.comments.push(this.comment);
    this.appService.updateDish(dish)
        .subscribe(
        data => console.log(data),
        error => console.error('Error: ' + error),
    );
    this.dismiss();
  }
}