import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { HomePopoverComponent } from '../home-popover/home-popover.component';
import { LocationPopoverComponent } from '../location-popover/location-popover.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public popoverController: PopoverController,
    public navCtrl: NavController) { }

ngOnInit() {
}
async presentPopover(event) {
const popover = await this.popoverController.create({
component: HomePopoverComponent,
event
});
return await popover.present();
}
async presentPopover1(event1) {
const popover1 = await this.popoverController.create({
component: LocationPopoverComponent,
event
});
return await popover1.present();
}

doRefresh(event) {
console.log('Begin async operation');

setTimeout(() => {
console.log('Async operation has ended');
event.target.complete();
}, 2000);
}


}