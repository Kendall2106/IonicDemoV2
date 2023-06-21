import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { User } from 'src/app/core/modelos/user.model';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  public alertButtons = [
    {
    text: 'OK',
    role: 'confirm',
    handler: () => {
      this.register();
    }
  }
  ];
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

  @ViewChild('popover') popover: any;

  isOpen = false;



  name: String ="";
  password: String="";

 

  constructor(private nav: NavController, private alertController: AlertController, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {

  }



  async presentPopover(e: Event) {
    this.popover.event = e;
    console.log(Utils.users.length);
    for (let index = 0; index < Utils.users.length; index++) {
      if(this.name==Utils.users[index].name && this.password == Utils.users[index].password){
        this.nav.navigateForward('/home');
      }else{
        this.isOpen = true;
      }
    }
    this.clear();
  }

  register(){
    
   /* const user: User = {
      id: Utils.users.length+1,
      name: this.alertInputs[0].value,
      password: this.alertInputs[1].passwordR,
      age: this.alertInputs[2].ageR,
      date: this.alertInputs[3].dateR
    }; 
    Utils.users.push(user);*/
  

  }

  clear(){
    this.name="";
    this.password="";
  }
  
}
