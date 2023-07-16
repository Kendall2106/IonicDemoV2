import { Component, OnInit, ViewChild} from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { Utils } from 'src/app/core/utilidades/util';
import { ModalComponent } from 'src/app/core/component/modal/modal.component';
import { Producto } from 'src/app/core/modelos/producto.model';


@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  products: Producto[] = []; 
  urlApi: string = environment.urlAPI;
  constructor(private alertController: AlertController, public modalController: ModalController, private nav: NavController, private actionSheetCtrl: ActionSheetController ) {}

  ngOnInit() {
    this.loadTeam();
  }

  loadTeam(){
    for (let index = 0; index <= Utils.team.length; index++) {
       this.products = Utils.team;
     }  
  }

  async addBrands(){
    if(Utils.team.length<6){
        const modal = await this.modalController.create({
        component: ModalComponent,
        componentProps: {action: "add"},
      });
      await modal.present();
    }else{
      const alert = await this.alertController.create({
        message: 'No deben haber más de 6 marcas.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  deleteBrands(producto: Producto){
    const index = Utils.team.findIndex((c) => c.id === producto.id);
      if (index !== -1) {
        Utils.team.splice(index, 1);
      }
      if(Utils.team.length==0){
        this.nav.navigateForward('/home');
      }else{
        this.loadTeam();
      }
  }

  async abrirModal(brand: any) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { brand: brand, action: "update" },
    });
    await modal.present();
  }


  async presentActionSheet(producto: Producto) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Estas seguro?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteBrands(producto)
          },
        },
        {text: 'Cerrar',role: 'cancel',},
      ],
    });
    await actionSheet.present();
  }

  


}
