import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import firebase from 'firebase';
/**
 * Generated class for the MembermodalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-membermodal',
  templateUrl: 'membermodal.html',
})
export class MembermodalPage {
  
  //membersList: FirebaseListObservable<any[]>;

  //search
  public searchList:Array<any>;
  public loadedMemberList:Array<any>;
  public memberRef:firebase.database.Reference;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public firebaservice: FirebaseServiceProvider) {
              
              this.memberRef = firebase.database().ref('/members/');

                this.memberRef.on('value', searchList => {
                let mem = [];
                searchList.forEach( member => {
                mem.push(member.val());
                return false;
                });

               this.searchList = mem;
               this.loadedMemberList = mem;
                });

              //this.membersList = this.firebaservice.getmasterdb();
  }

initializeItems(): void {
  this.searchList = this.loadedMemberList;
}

getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.searchList = this.searchList.filter((v) => {
    if(v.name && q) {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.searchList.length);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembermodalPage');
  }

}
