import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../modelos/pokemon.model';
import { environment } from 'src/environments/environment';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../../utilidades/util';

@Component({
    selector: 'modal',
    templateUrl: './modal.page.html',
  })

export class ModalComponent implements OnInit{


  characters: Pokemon[] = []; 
  player:any;
  action:any;
 

  urlApi: string = environment.urlAPI;
  constructor(navParams: NavParams, private http: HttpClient, private nav: NavController, public viewCtrl: ModalController) {
    this.player=navParams.get('player');
    this.action=navParams.get('action');
   }

  ngOnInit() {
    console.log("hola");
    for (let index = 1; index < 50; index++) {
      this.http
      .get<any>(this.urlApi+index)
      .subscribe((res: any) => {
        const pokemon: Pokemon = {
          id: res.id,
          name: res.name,
          image: res.sprites.other.dream_world.front_default,
          selected: false
        };
        this.characters[index - 1] = pokemon;
      }); 
      
    }  

  }

  ver(character: Pokemon){
    var existe = false;
    for (let index = 0; index <  Utils.team.length; index++) {
      if(Utils.team[index].name == character.name){
        existe = true;
      }
    }

    if(existe==false){
      if(this.action=="add"){
        Utils.team.push(character);
      }else if(this.action=="update"){
        for (let index = 0; index < Utils.team.length; index++) {
          if(Utils.team[index].name==this.player.name){
            Utils.team[index] = character;
          }
        }
      }
    }
    this.viewCtrl.dismiss();
  }

}