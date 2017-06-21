import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html'
})
export class ReservePage {

  reservation: any = {};
  
  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  doReservation() {
    console.log("Doing Reservation", this.reservation)
    this.dismiss();
  }

}
