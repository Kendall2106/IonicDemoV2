import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController) {}

  ver(){
    console.log(Utils.team.length)
    if(Utils.team.length>0){
      this.nav.navigateForward('/team');
    }
  }

}
