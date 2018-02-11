import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  getmembers() {
   return this.afd.list('/newmembers/');
  }

  addmembers(name,contact,location,ministry,email,invitedby) {

  var createddate = new Date().toDateString();

   this.afd.list('/newmembers/').push({name: name,
                                    contact: contact,
                                    location: location,
                                    ministry: ministry,
                                    email: email,
                                    invitedby: invitedby,
                                    createddate: createddate});
  }

  deletemember(id) {
   this.afd.list('/newmembers/').remove(id);
  }

  //Master List
  getmasterdb() {
  
  return this.afd.list('/members/');

  }

  addmasterdb(name,contact,location,ministry,email,category,invitedby) {

    var createddate = new Date().toDateString();

    this.afd.list('/members/').push({name: name,
                                     contact: contact,
                                     location: location,
                                     ministry: ministry,
                                     email: email,
                                     category: category,
                                     createddate: createddate,
                                     invitedby: invitedby
                                    });
  }

}
