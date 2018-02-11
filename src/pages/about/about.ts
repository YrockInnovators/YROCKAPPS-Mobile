import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { SqlStorageProvider } from '../../providers/sql-storage/sql-storage';
import { sanitizeHtml } from '@angular/platform-browser/src/security/html_sanitizer';
import { Header } from 'ionic-angular/umd';
import { $$observable } from 'rxjs/symbol/observable';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController} from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FormBuilder,Validators } from '@angular/forms';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  sumValue: number=0;
  cntmember: FirebaseListObservable<any[]>;
  sermons: any;
  user: any;
  membersList: FirebaseListObservable<any[]>;
  memberForm: any;
  category: any;

  constructor(public navCtrl: NavController,
              private iab: InAppBrowser,
              public sqlstorage: SqlStorageProvider,
              public firebaseService: FirebaseServiceProvider,
              public loading: LoadingController,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public afd: AngularFireDatabase) {

                let loader = this.loading.create({content: "Loading..."}); 
                loader.present();
                //this.membersList = this.firebaseService.getmembers();
                loader.dismiss(console.log(this.membersList));

                 this.memberForm = this.formBuilder.group({
                 "name":      ["",Validators.required],
                 "contact":   ["",Validators.required],
                 "location":   ["",Validators.required],
                 "ministry":  ["", Validators.required],
                 "email":     ["",Validators.required],
                 "category": ["",Validators.required]
                });

              }
  
/*  getData() {
    this._gdrivefiles.gdriveapi().subscribe(res => {
        this.user = res.items;
        console.log(this.user);
    })
  }
*/
  /*getSermons() {
    this._gdrivefiles.gdriveapi().subscribe(res => {
        this.sermons = res;
        console.log(this.sermons);
    })
  }*/
  addmembermaster(newmembers,contact,location,ministry,email,category){
  
    var invitedby = null;

    this.firebaseService.addmasterdb(newmembers,contact,location,ministry,email,category,invitedby);
    this.memberForm.reset();
    
    let alert = this.alertCtrl.create({
    title: 'Member registered',
    subTitle: 'Go and Make Disciples!',
    buttons: [{text: 'Dismiss',
               cssClass: 'alertNormal' 
             }]
     });
     alert.present();

      //reset sumValue
     this.sumValue = 0;
     this.countmembers();

  }
  
  openmembermodal() {
   
    var memberpage = this.modalCtrl.create('MembermodalPage');
    memberpage.present();

  }

  countmembers() {
    let loader = this.loading.create({content: "Loading..."});
    loader.present(); 
    this.cntmember = this.afd.list('/members/');
   this.cntmember.subscribe(data => {
    data.forEach(item => {
    // sum here
    this.sumValue = this.sumValue + 1;  
     });
    loader.dismiss();
   });
  }

  ngOnInit(){
  this.countmembers();
 }
  
}
