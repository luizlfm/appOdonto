import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.page.html',
  styleUrls: ['./dicas.page.scss'],
})
export class DicasPage implements OnInit {
  private previousUrl = '';
  private title: string;

  constructor(
    public navCtrl: NavController) { 
   
  }

  
  ngOnInit() {
    this.setTitle('Dicas de Saúde');
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
