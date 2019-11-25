import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.page.html',
  styleUrls: ['./arquivos.page.scss']
})
export class ArquivosPage implements OnInit {
  private previousUrl = '';
  private title: string;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.setTitle('Envie Fotos para Dentista');
  }
  protected setTitle(title: string) {
    this.title = title;
  }
  voltar() {
    this.navCtrl.back();
  }
  public getTitle() {
    return this.title;
  }
  public getPreviousUrl() {
    return this.previousUrl;
  }
}
