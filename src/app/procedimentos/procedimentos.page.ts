import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.page.html',
  styleUrls: ['./procedimentos.page.scss']
})
export class ProcedimentosPage implements OnInit {
  private previousUrl = '';
  private title: string;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.setTitle('Procedimentos Realizados');
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
