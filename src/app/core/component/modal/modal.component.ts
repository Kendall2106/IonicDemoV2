import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../modelos/pokemon.model';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Utils } from '../../utilidades/util';
import { PokemonService } from '../../servicios/pokemon.service';

@Component({
    selector: 'modal',
    templateUrl: './modal.page.html',
  })

export class ModalComponent implements OnInit{

  characters: Pokemon[] = []; 
  player:any;
  action:any;
 
  constructor(navParams: NavParams, private pokemonService: PokemonService, private nav: NavController, public viewCtrl: ModalController) {
    this.player=navParams.get('player');
    this.action=navParams.get('action');
   }

  ngOnInit() {
    for (let index = 1; index < 50; index++) {
      this.pokemonService.loadPokemon(index).subscribe((res: any) => {
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