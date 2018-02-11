import { Header } from 'ionic-angular/navigation/nav-interfaces';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GdriveprovidersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GdriveprovidersProvider {

  constructor(public _http: Http) {
    console.log('Hello GdriveprovidersProvider Provider');
  }

   gdriveapi(){
    return this._http.get('https://www.googleapis.com/drive/v2/files?q="0B4KaS-01uNqVd1k3UnpGVjZNajg"+in+parents&key=AIzaSyCBX1T0Ourg3H-Hmuev7N1MpOIGyJbEy9s')
      .map(res => res.json());
  }
  
  gdriveannounce(){
    return this._http.get('https://www.googleapis.com/drive/v2/files?q="0B4KaS-01uNqVbElLOFpST2dXS00"+in+parents&key=AIzaSyBFJp4iOVqSw13_-CAATBV7VookCjdoRNk')
      .map(res => res.json());
  }

  eventbriteevent() {
      return this._http.get('https://www.eventbriteapi.com/v3/users/me/owned_events/?token=XKQSADNBU4ICQKHZUAOS')
      .map(res => res.json());
}
  
eventbritesingle(eventid){

     var url = 'https://www.eventbriteapi.com/v3/events/' + eventid + '?token=XKQSADNBU4ICQKHZUAOS';
      return this._http.get(url)
      .map(res => res.json());
}

googleformapi(username: string, contact: string, location: string, email: string) {

     var googlelink = 'https://docs.google.com/forms/d/e/1FAIpQLSc_bOvbPPXm_rVOz4SZ2nSf8sxetThTDl0-Y67ndwv_Di01EQ/formResponse'

     var data = JSON.stringify({
       username: username,
       contact: contact,
       location: location,
       email: email  
     });

     this._http.post(googlelink, data).map(res => res.json());
}

  //Sermon API for YROCK website
 /* sermonapi() {
      return this._http.get('http://reignydeyz-001-site4.btempurl.com/api/series')
      .map(res => res.json());

  }*/

}
