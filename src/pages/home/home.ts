import { NgModule, Component } from '@angular/core';
import {LoadingController,  NavController, ModalController } from 'ionic-angular';
import { DatePipe, AsyncPipe } from '@angular/common';
import { GdriveprovidersProvider } from '../../providers/gdriveproviders/gdrive-providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GdriveprovidersProvider]

})
export class HomePage {
  eventsof: any;
  user: any;

  constructor(public navCtrl: NavController,
              public _gdrivefiles: GdriveprovidersProvider,
              public loading: LoadingController,
              public modalCtrl: ModalController) {

  }

  //Gdrive Call
  getbannerimg() { 
        let loader = this.loading.create({content: "Loading..."}); 
        loader.present();
        this._gdrivefiles.gdriveannounce().subscribe(res => {
        this.user = res.items;
         loader.dismiss();
    })
  }

  openmodal(eid) {
    var data = {message: eid.id };
    var modalPage = this.modalCtrl.create('ModalPage', data); 
    modalPage.present();
  }

  //Eventbrite Call
  /*getevent() {
        let loader = this.loading.create({content: "Loading..."}); 
        loader.present();
        this._gdrivefiles.eventbriteevent().subscribe(res => {
        this.eventsof = res.events;
        loader.dismiss(console.log(this.eventsof));
    })

  }*/

  ionViewWillEnter() {
        this.getbannerimg();
        //this.getevent();
        
  }
   
  parsedate() 
  {
    let vardate = new Date();
  }
  
}
