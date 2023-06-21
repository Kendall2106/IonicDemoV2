import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, NavParams } from '@ionic/angular';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message: String;
  open: boolean = true;
  user: any;

  public alertButtons = ['OK'];
  constructor(private nav: NavController, private alertController: AlertController) {
    this.message="",
    this.user = localStorage.getItem('user');
  
  }

  async ver(){
    console.log(Utils.team.length)
    if(Utils.team.length>0){
      this.nav.navigateForward('/team');
    }else{
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Escoge un equipo',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  close(){
    this.nav.navigateForward('/login');
  }

 
}
