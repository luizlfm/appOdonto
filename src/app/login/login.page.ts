import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides, ToastController, LoadingController } from '@ionic/angular';
import { User } from '../interface/user';
import { AuthService } from '../services/auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  isTextFieldType: boolean;
  currentOritation: string = "";
  public userLogin: User = {};
  public userRegistro: User = {};
  private loading: any;
  route: any;
  tipo: boolean;


  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authServices: AuthService,
    navCtrl: NavController) { }

  ngOnInit() {

  }
  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }


  async login() {
    await this.presentLoading();

    try {
      await this.authServices.login(this.userLogin);
      
      this.route.navigate('/principal');
    } catch (error) {
      let message: string;
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'E-mail sendo usado!';
          break;

        case 'auth/invalid-email':
          message = 'E-mail com formato inválido!';
          break;
      }

      this.presentToast(message);
    } finally {
      this.loading.dismiss();
      
    }
  }

  async registrar() {
    await this.presentLoading();

    try {
      await this.authServices.register(this.userRegistro);
      
    } catch (error) {
      let message: string;
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'E-mail sendo usado!';
          break;

        case 'auth/invalid-email':
          message = 'E-mail com formato inválido!';
          break;
      }

      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }


  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando...',
    });
    this.route.navigate('/principal');
    return this.loading.present();


  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  ExibirOcultar(){
    this.tipo = !this.tipo; 

  }
}
