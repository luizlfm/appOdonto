import { Component } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { HomePopoverComponent } from '../home-popover/home-popover.component';
import { LocationPopoverComponent } from '../location-popover/location-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    public popoverController: PopoverController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}
  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event
    });
    return await popover.present();
  }
  async presentPopover1(event) {
    const popover1 = await this.popoverController.create({
      component: LocationPopoverComponent,
      event
    });
    return await popover1.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
