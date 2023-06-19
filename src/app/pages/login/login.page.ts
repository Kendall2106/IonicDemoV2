import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Password',
      type:'password',
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
    {
      type: 'datetime-local', // Utiliza 'datetime-local' para tener un campo de fecha y hora.
      placeholder: 'Fecha y Hora',
    },
  ];

  constructor(private nav: NavController) {}

  ngOnInit() {
  }

  open(){
    this.nav.navigateForward('/home');
  }
}
