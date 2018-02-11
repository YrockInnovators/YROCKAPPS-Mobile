import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//Database
import { SQLite } from '@ionic-native/sqlite';
import { SqlStorageProvider } from '../providers/sql-storage/sql-storage';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Push, PushObject, PushOptions} from '@ionic-native/push';

 const firebaseConfig = {
    apiKey: "AIzaSyCYUt7-XBpHmtG5AqvbLWAAZTd3EOqFUnI",
    authDomain: "yrockdb.firebaseapp.com",
    databaseURL: "https://yrockdb.firebaseio.com",
    projectId: "yrockdb",
    storageBucket: "",
    messagingSenderId: "1084603466535"
  };

  

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    SqlStorageProvider,
    FirebaseServiceProvider,
    Push
  ]
})
export class AppModule {}
