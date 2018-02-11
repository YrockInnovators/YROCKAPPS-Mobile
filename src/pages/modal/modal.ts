import { Observable } from 'rxjs/Rx';
import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GdriveprovidersProvider } from '../../providers/gdriveproviders/gdrive-providers';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  providers: [GdriveprovidersProvider]
})

export class ModalPage {

//local variable
startime: any;
description: any;
parameter1: any;
singletitle: any;
image: any;
endtime: any;
capacity: any;
eventlink: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController,
              public _gdrivefiles: GdriveprovidersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
    console.log(this.navParams.get('message'));
    
  }

//call single event on modal
eventsingleapi(){
  //var eventid = '37122933694';
  var eventid = this.navParams.get('message');
  this._gdrivefiles.eventbritesingle(eventid).subscribe(res => {
        this.singletitle = res.name.text;
        this.image = res.logo.url;
        this.description = res.description.text;
        //time
        this.startime = res.start.utc;
        this.endtime = res.end.utc;
        this.capacity = res.capacity;
        this.eventlink = res.url;

        
       
        
  })
}

public closemodal() {
   this.viewCtrl.dismiss(); 

  }

ionViewWillEnter() {
  
   this.eventsingleapi();
}

}
