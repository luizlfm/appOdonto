import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BasePage } from '../basePage';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.page.html',
  styleUrls: ['./portifolio.page.scss'],
})
export class PortifolioPage  implements OnInit {
  private previousUrl = '';
  private title: string;

  constructor(
    public navCtrl: NavController) { 
   
  }

  
  ngOnInit() {
    this.setTitle('Portifolio');
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
