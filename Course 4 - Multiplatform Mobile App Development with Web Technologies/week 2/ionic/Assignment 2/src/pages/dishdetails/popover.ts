import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-dishdetailsPopover',
  templateUrl: 'popover.html',
})
export class DishdetailsPopoverPage {

  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

}
