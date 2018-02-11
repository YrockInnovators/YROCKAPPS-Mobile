import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the NewmembermodalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newmembermodal',
  templateUrl: 'newmembermodal.html',
})
export class NewmembermodalPage {

membersList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public firebaseService: FirebaseServiceProvider) {
                this.membersList = this.firebaseService.getmembers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewmembermodalPage');
  }

}
