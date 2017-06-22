import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, ItemSliding, LoadingController, AlertController } from 'ionic-angular';

import { AppService } from '../../app/app.service';
import { AppSetting } from '../../app/app.setting';

@Pipe({
    name: 'FavoritePipe',
    pure: false
})
export class FavoritePipe implements PipeTransform {
    transform(dishes: any[], favorites: any[]): any {
        if (!dishes || !favorites) {
            return dishes;
        }
        
        return dishes.filter(
          function (dish) { 
            for (var i = 0; i < favorites.length; i++) { // iterate over filter
              if (dish.id === favorites[i].dishId) {
                return true;
              }
            }
            return false;
          }
        );
    }
}

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  baseUrl: string = AppSetting.BASE_URL;  
  dishes: any;
  favorites: any;
  loading: any;

  constructor(public navCtrl: NavController, public appService: AppService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.loading = this.loadingCtrl.create({
      content: 'Loading favorites...'
    });
  }
  
  ngOnInit() {
    this.loading.present();
    this.appService.getFavorites()
      .subscribe(
      data => this.favorites = data,
      error => console.error('Error: ' + error),
    );
    
    this.appService.getDishes()
      .subscribe(
      data => this.dishes = data,
      error => console.error('Error: ' + error),
    );
  }

  ngAfterViewInit() {
    this.loading.dismiss();
  }
  
  deleteFavorite(dish) {
    let favorite = this.favorites.filter(favorite => favorite.dishId === dish.id);
    this.appService.deleteFavorite(favorite[0].id)
      .subscribe(
      data => console.log(data),
      error => console.error('Error: ' + error),  
    );
    let newFavorites = [];
    for (var i = 0; i < this.favorites.length; i++){
      if (this.favorites[i].dishId !== dish.id) {
        newFavorites.push(this.favorites[i]);
      }
    }
    this.favorites = newFavorites;
  }

  presentDeleteConfirmation(dish, slidingItem: ItemSliding) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            slidingItem.close();
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.deleteFavorite(dish);
          }
        }
      ]
    });
    alert.present();
  }

}
