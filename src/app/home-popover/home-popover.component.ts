import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController, ModalController } from '@ionic/angular';
import { CadastroPage } from '../cadastro/cadastro.page';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

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
