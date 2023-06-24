import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, NavController } from '@ionic/angular';
import { Observable, reduce } from 'rxjs';
import { Producto } from 'src/app/core/modelos/producto.model';
import { Utils } from 'src/app/core/utilidades/util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.page.html',
  styleUrls: ['./companies-list.page.scss'],
})
export class CompaniesListPage implements OnInit {
cont: number = 0;
product: Producto[] =[];
idP: any;
nameP:any;
imageP:any;
selectedP:any;
  
constructor(private nav: NavController, private alertController: AlertController) {}

  ngOnInit() {
    Utils.team = [];
    this.loadPokemon();
  }

  loadPokemon(){
    for (let index = 0; index < Utils.promo.length; index++) {
      this.product[index]= Utils.promo[index];
    }
  }

  updateTeam(producto: Producto) {
    if(this.product[producto.id].selected==true){
      this.product[producto.id].selected=false;
      const index = Utils.team.findIndex((c) => c.id === producto.id);
      if (index !== -1) {
        Utils.team.splice(index, 1);
      }
    }else{
      this.product[producto.id].selected=true;
      Utils.team.push(producto);
    }
    this.cont=Utils.team.length;
  }

  async saveTeam(){
    if(Utils.team.length > 6){
    const alert = await this.alertController.create({
      message: 'El equipo debe ser menor de 6 Pokemones',
      buttons: ['OK']
    });
    await alert.present();
    } else {
      this.nav.navigateForward('/home');
    }
  }
}
