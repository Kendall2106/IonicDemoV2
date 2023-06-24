import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Utils } from '../../utilidades/util';
import { Producto } from '../../modelos/producto.model';

@Component({
    selector: 'modal',
    templateUrl: './modal.page.html',
  })

export class ModalComponent implements OnInit{

  product: Producto[] = [];
  player:any;
  action:any;
 

  constructor(navParams: NavParams, private nav: NavController, public viewCtrl: ModalController) {
    this.player=navParams.get('player');
    this.action=navParams.get('action');
   }

  ngOnInit() {
    for (let index = 0; index < Utils.promo.length; index++) {
      this.product[index]= Utils.promo[index];
    }

  }

  ver(producto: Producto){
    var existe = false;
    for (let index = 0; index <  Utils.team.length; index++) {
      if(Utils.team[index].name == producto.name){
        existe = true;
      }
    }

    if(existe==false){
      if(this.action=="add"){
        Utils.team.push(producto);
      }else if(this.action=="update"){
        for (let index = 0; index < Utils.team.length; index++) {
          if(Utils.team[index].name==this.player.name){
            Utils.team[index] = producto;
          }
        }
      }
    }
    this.viewCtrl.dismiss();
  }

}