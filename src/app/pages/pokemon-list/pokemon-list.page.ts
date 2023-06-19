import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, reduce } from 'rxjs';
import { Pokemon } from 'src/app/core/modelos/pokemon.model';
import { Utils } from 'src/app/core/utilidades/util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
//characters = [];
characters: Pokemon[] = []; 
idP: any;
nameP:any;
imageP:any;
selectedP:any;
  
urlApi: string = environment.urlAPI;
constructor(private http: HttpClient) {
}

ngOnInit() {
  Utils.team = [];
  this.loadPokemon();
}

loadPokemon(){
  for (let index = 1; index < 50; index++) {
    this.http.get<any>(this.urlApi+index).subscribe((res: any) => {
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

updateTeam(character: Pokemon) {
  if(this.characters[character.id-1].selected==true){
    this.characters[character.id-1].selected=false;
    const index = Utils.team.findIndex((c) => c.id === character.id);
    if (index !== -1) {
      Utils.team.splice(index, 1);
    }
  }else{
    this.characters[character.id-1].selected=true;
    Utils.team.push(character);
  }

  console.log("Hola "+Utils.team.length)

}


saveTeam(){
   
}


}
