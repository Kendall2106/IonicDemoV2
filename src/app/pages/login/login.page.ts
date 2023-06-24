import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController} from '@ionic/angular';
import { User } from 'src/app/core/modelos/user.model';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  @ViewChild('popover') popover: any;

  isOpen = false;
  name: String ="";
  password: String="";

  constructor(private nav: NavController, private alertController: AlertController, private router: Router) {}

  presentPopover(e: Event) {
    this.popover.event = e;
    for (let index = 0; index < Utils.users.length; index++) {
      if(this.login(index)==true){
        this.nav.navigateForward('/home');
        localStorage.setItem('user', this.name+"");
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    }
    this.clear();
  }

   login(index:number){
    if(this.name==Utils.users[index].name && this.password == Utils.users[index].password){
      return true;
    } else {
      return false;
    }
  }

  register(nombre:any, contra:any, edad:any, fecha:any){
    if(nombre!="" && contra!=""){
      const user: User = {
        id: Utils.users.length+1,
        name: nombre,
        password: contra,
        age: edad,
        date: fecha
      }; 
      Utils.users.push(user);
    }
  }


  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'Crear cuenta:',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre',
          type: 'text',
        },
        {
          name: 'password',
          placeholder: 'Contraseña',
          type:'password',
        },
        {
          name: 'edad',
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          name: 'date',
          type: 'date',
          placeholder: 'Fecha'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            this.register(data.nombre, data.password, data.edad, data.date);
          }
        }
      ]
    });

    await alert.present();
  }

  clear(){
    this.name="";
    this.password="";
  }

}
