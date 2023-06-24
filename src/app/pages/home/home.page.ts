import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, AnimationController, NavController, Animation } from '@ionic/angular';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('img1',{static: true}) img1: ElementRef | any ;
  @ViewChild('img2',{static: true}) img2: ElementRef | any ;

  message: String;
  open: boolean = true;
  user: any;

  public alertButtons = ['OK'];
 
  constructor(private nav: NavController, private alertController: AlertController, private animationCtrl: AnimationController) {
    this.message="",
    this.user = localStorage.getItem('user');
  }

   async ver(){
   console.log(Utils.team.length)
    if(Utils.team.length>0) {
      this.nav.navigateForward('/team');
    } else {
      const alert = await this.alertController.create({
        header: 'Escoge un equipo',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  close(){
    this.nav.navigateForward('/login');
  }

   ngAfterViewInit(){
    this.createAnimation(this.img1);
    this.createAnimation(this.img2);
  }

  createAnimation(element: any){
    const ImgAnimation: Animation = this.animationCtrl.create()
    .addElement(element.nativeElement)
    .duration(1500)
    .fromTo('opacity','0','1')
    .fromTo('transform', 'scale(0.5)', 'scale(1)');

     ImgAnimation.play();
  }
}
