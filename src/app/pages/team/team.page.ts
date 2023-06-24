import { Component, OnInit, ViewChild} from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActionSheetController, AlertController, IonModal, ModalController, NavController } from '@ionic/angular';
import { Pokemon } from 'src/app/core/modelos/pokemon.model';
import { Utils } from 'src/app/core/utilidades/util';
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
  constructor(private alertController: AlertController, public modalController: ModalController, private nav: NavController, private actionSheetCtrl: ActionSheetController ) {}

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
    if(Utils.team.length==0){
      this.nav.navigateForward('/home');
    }else{
      this.loadTeam();
    }
  }

  async abrirModal(player: any) {
    console.log("abrirModal");
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { player: player, action: "update" },
    });
    await modal.present();
  }

  async presentActionSheet(character: Pokemon) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Estás seguro?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deletePokemon(character)
          },
        },
        {text: 'Cerrar',role: 'cancel',},
      ],
    });

    await actionSheet.present();
  }

  async addPokemon(){
    if(Utils.team.length<6){
      const modal = await this.modalController.create({
        component: ModalComponent,
        componentProps: {action: "add"},
      });
      await modal.present();
    }else{
      const alert = await this.alertController.create({
        message: 'El equipo debe ser menor de 6 Pokemones',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
