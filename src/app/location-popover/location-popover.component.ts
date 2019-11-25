import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController, ModalController } from '@ionic/angular';
import { CadastroPage } from '../cadastro/cadastro.page';

@Component({
  selector: 'app-location-popover',
  templateUrl: './location-popover.component.html',
  styleUrls: ['./location-popover.component.scss'],
})
export class LocationPopoverComponent implements OnInit {

  route: any;

  constructor(public popoverController: PopoverController,
    public navCtrl: NavController,
    public modalController: ModalController) {

  }

  ngOnInit() { }

  
  close() {
    this.popoverController.dismiss();

  }

}
