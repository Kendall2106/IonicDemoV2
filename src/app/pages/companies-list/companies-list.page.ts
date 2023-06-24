import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Producto } from 'src/app/core/modelos/producto.model';
import { Utils } from 'src/app/core/utilidades/util';


@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.page.html',
  styleUrls: ['./companies-list.page.scss'],
})
export class CompaniesListPage implements OnInit {
cont: number = 0;
products: Producto[] =[];
  
constructor(private nav: NavController, private alertController: AlertController) {}

  ngOnInit() {
    Utils.team = [];
    this.products = [];
    this.loadBrands();
  }

  loadBrands(){
    for (let index = 0; index < Utils.promo.length; index++) {
      this.products[index]= Utils.promo[index];
      this.products[index].selected = false;
    }
  }

  updateTeam(producto: Producto) {
    if(this.products[producto.id].selected==true){
      this.products[producto.id].selected=false;
      const index = Utils.team.findIndex((c) => c.id === producto.id);
      if (index !== -1) {
        Utils.team.splice(index, 1);
      }
    }else{
      this.products[producto.id].selected=true;
      Utils.team.push(producto);
    }
    this.cont=Utils.team.length;
  }

  async saveTeam(){
    if(Utils.team.length > 6){
    const alert = await this.alertController.create({
      message: 'No deben haber más de 6 marcas.',
      buttons: ['OK']
    });
    await alert.present();
    } else {
      this.nav.navigateForward('/home');
    }
  }
}
