import { FormBuilder,Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { GdriveprovidersProvider } from '../../providers/gdriveproviders/gdrive-providers';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [GdriveprovidersProvider]
})
export class ContactPage {
  counter: number;
  averageValue: number = 0;
  sumValue: number = 0;
  orderForm: any;
  cntmember: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              public _gdrivefiles: GdriveprovidersProvider,
              public firebaseService: FirebaseServiceProvider,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public afd: AngularFireDatabase,
              public loading: LoadingController) {
              this.orderForm = this.formBuilder.group({
                 "name":      ["",Validators.required],
                 "contact":   ["",Validators.required],
                 "location":   ["",Validators.required],
                 "ministry":  ["", Validators.required],
                 "email":     ["",Validators.required],
                 "invitedby": ["",Validators.required]
                });
  }

  addmembers(newmembers,contact,location,ministry,email,invitedby) {
    
    var category = "Member";

    this.firebaseService.addmembers(newmembers,contact,location,ministry,email,invitedby);

    this.firebaseService.addmasterdb(newmembers,contact,location,ministry,email,category,invitedby);

    this.orderForm.reset();

   let alert = this.alertCtrl.create({
    title: 'New Member Added',
    subTitle: 'Welcome to YROCK',
    buttons: [{text: 'Dismiss',
               cssClass: 'alertNormal' 
             }]
     });
     alert.present();

     //reset sumValue
     this.sumValue = 0;
     this.countnewmembers();
  }
  
  opennewmembermodal(){
    var newmemberpage = this.modalCtrl.create('NewmembermodalPage');
    newmemberpage.present();
  }

countnewmembers() {
    let loader = this.loading.create({content: "Loading..."});
    loader.present(); 
    this.cntmember = this.afd.list('/newmembers/');
   this.cntmember.subscribe(data => {
    data.forEach(item => {
    // sum here
    this.sumValue = this.sumValue + 1;  
     });
    loader.dismiss();
   });
  }

ngOnInit(){
  this.countnewmembers();
 }

}
