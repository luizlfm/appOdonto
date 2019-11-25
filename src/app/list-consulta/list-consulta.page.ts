import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-consulta',
  templateUrl: './list-consulta.page.html',
  styleUrls: ['./list-consulta.page.scss'],
})
export class ListConsultaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.back();
    
  }

}
