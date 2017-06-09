import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppService } from '../../app/app.service';
import { AppSetting } from '../../app/app.setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  baseUrl: string = AppSetting.BASE_URL;  
  dish: any;
  promotion: any;
  leader: any;

  constructor(public navCtrl: NavController, public appService: AppService) {

  }
  
  ngOnInit(){
    this.appService.getDish(0)
    .subscribe(
      data => this.dish = data,
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );

    this.appService.getPromotion(0)
    .subscribe(
      data => this.promotion = data,
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );

    this.appService.getLeader(3)
    .subscribe(
      data => this.leader = data,
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }

}
