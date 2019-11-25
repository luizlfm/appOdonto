import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restrito',
  templateUrl: './restrito.page.html',
  styleUrls: ['./restrito.page.scss'],
})
export class RestritoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.back();
    
  }
}
