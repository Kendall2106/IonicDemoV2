import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IonModal, ModalController } from '@ionic/angular';
import { Pokemon } from 'src/app/core/modelos/pokemon.model';
import { Utils } from 'src/app/core/utilidades/util';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalComponent } from 'src/app/core/component/modal/modal.component';


@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  presentingElement:any;

  characters: Pokemon[] = []; 
  urlApi: string = environment.urlAPI;
  constructor(private http: HttpClient, public modalController: ModalController) {}

  ngOnInit() {
    this.loadTeam();
    this.presentingElement = document.querySelector('.ion-page');

  }

  loadTeam(){
    for (let index = 1; index <= Utils.team.length; index++) {
       this.characters = Utils.team;
       console.log("ver "+this.characters.length);
     }  
  }

  deletePokemon(character: Pokemon){
    const index = Utils.team.findIndex((c) => c.id === character.id);
      if (index !== -1) {
        Utils.team.splice(index, 1);
      }
      this.loadTeam();
  }

  async abrirModal(player: any) {
    console.log("abrirModal");
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { player: player },
    });
    await modal.present();
  
  }


 

}
