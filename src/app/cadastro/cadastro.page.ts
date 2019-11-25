import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ViewChild } from '@angular/core';
import {
  NavController,
  IonSlides,
  ToastController,
  LoadingController,
  IonContent
} from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss']
})
export class CadastroPage implements OnInit {
  segment = 0;
  category: any;

  selectedDocumentType: string;
  private previousUrl = '';
  private title: string;

  constructor(public navCtrl: NavController) {
    this.category = 'cad1';
  }

  ngOnInit() {
    this.setTitle('Dados Pessais');
  }
  protected setTitle(title: string) {
    this.title = title;
  }
  segmentChanged1() {
    this.category = 'cad1';
  }
  segmentChanged2() {
    this.category = 'cad2';
  }
  segmentChanged3() {
    this.category = 'cad3';
  }
  segmentChanged4() {
    this.category = 'cad4';
  }
  segmentChanged5() {
    this.category = 'cad5';
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

  // async slideChanged() {
  //   this.segment = await this.slider.getActiveIndex();
  // }

  // private next() {
  //   this.slider.slideNext();
  // }

  // prev() {
  //   this.slider.slidePrev();
  // }
  // ScrollToTop() {
  //   this.content.scrollToTop(1500);
  // }
}
