import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  private previousUrl = '';
  private title: string;

  constructor(
    public navCtrl: NavController) { 
   
  }

  
  ngOnInit() {
    this.setTitle('Nossos Serviços');
  }
  protected setTitle(title: string) {
    this.title = title;
  }
  voltar(){
    this.navCtrl.back();
    
  }
  public getTitle() {
    return this.title;
  }
  public getPreviousUrl() {
    return this.previousUrl;
  }

}
