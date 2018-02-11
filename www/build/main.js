webpackJsonp([3],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GdriveprovidersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GdriveprovidersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GdriveprovidersProvider = (function () {
    function GdriveprovidersProvider(_http) {
        this._http = _http;
        console.log('Hello GdriveprovidersProvider Provider');
    }
    GdriveprovidersProvider.prototype.gdriveapi = function () {
        return this._http.get('https://www.googleapis.com/drive/v2/files?q="0B4KaS-01uNqVd1k3UnpGVjZNajg"+in+parents&key=AIzaSyCBX1T0Ourg3H-Hmuev7N1MpOIGyJbEy9s')
            .map(function (res) { return res.json(); });
    };
    GdriveprovidersProvider.prototype.gdriveannounce = function () {
        return this._http.get('https://www.googleapis.com/drive/v2/files?q="0B4KaS-01uNqVbElLOFpST2dXS00"+in+parents&key=AIzaSyBFJp4iOVqSw13_-CAATBV7VookCjdoRNk')
            .map(function (res) { return res.json(); });
    };
    GdriveprovidersProvider.prototype.eventbriteevent = function () {
        return this._http.get('https://www.eventbriteapi.com/v3/users/me/owned_events/?token=XKQSADNBU4ICQKHZUAOS')
            .map(function (res) { return res.json(); });
    };
    GdriveprovidersProvider.prototype.eventbritesingle = function (eventid) {
        var url = 'https://www.eventbriteapi.com/v3/events/' + eventid + '?token=XKQSADNBU4ICQKHZUAOS';
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    GdriveprovidersProvider.prototype.googleformapi = function (username, contact, location, email) {
        var googlelink = 'https://docs.google.com/forms/d/e/1FAIpQLSc_bOvbPPXm_rVOz4SZ2nSf8sxetThTDl0-Y67ndwv_Di01EQ/formResponse';
        var data = JSON.stringify({
            username: username,
            contact: contact,
            location: location,
            email: email
        });
        this._http.post(googlelink, data).map(function (res) { return res.json(); });
    };
    return GdriveprovidersProvider;
}());
GdriveprovidersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GdriveprovidersProvider);

//# sourceMappingURL=gdrive-providers.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/membermodal/membermodal.module": [
		406,
		0
	],
	"../pages/modal/modal.module": [
		407,
		2
	],
	"../pages/newmembermodal/newmembermodal.module": [
		408,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\tabs\tabs.html"*/'<ion-tabs color="secondary">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Members" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="New Friends" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_service_firebase_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sql_storage_sql_storage__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = (function () {
    function AboutPage(navCtrl, iab, sqlstorage, firebaseService, loading, formBuilder, alertCtrl, modalCtrl, afd) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.sqlstorage = sqlstorage;
        this.firebaseService = firebaseService;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.afd = afd;
        this.sumValue = 0;
        var loader = this.loading.create({ content: "Loading..." });
        loader.present();
        //this.membersList = this.firebaseService.getmembers();
        loader.dismiss(console.log(this.membersList));
        this.memberForm = this.formBuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            "contact": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            "location": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            "ministry": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            "category": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]
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
    AboutPage.prototype.addmembermaster = function (newmembers, contact, location, ministry, email, category) {
        var invitedby = null;
        this.firebaseService.addmasterdb(newmembers, contact, location, ministry, email, category, invitedby);
        this.memberForm.reset();
        var alert = this.alertCtrl.create({
            title: 'Member registered',
            subTitle: 'Go and Make Disciples!',
            buttons: [{ text: 'Dismiss',
                    cssClass: 'alertNormal'
                }]
        });
        alert.present();
        //reset sumValue
        this.sumValue = 0;
        this.countmembers();
    };
    AboutPage.prototype.openmembermodal = function () {
        var memberpage = this.modalCtrl.create('MembermodalPage');
        memberpage.present();
    };
    AboutPage.prototype.countmembers = function () {
        var _this = this;
        var loader = this.loading.create({ content: "Loading..." });
        loader.present();
        this.cntmember = this.afd.list('/members/');
        this.cntmember.subscribe(function (data) {
            data.forEach(function (item) {
                // sum here
                _this.sumValue = _this.sumValue + 1;
            });
            loader.dismiss();
        });
    };
    AboutPage.prototype.ngOnInit = function () {
        this.countmembers();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\about\about.html"*/'<ion-header>\n\n<ion-navbar color="secondary">\n\n    <ion-title style="text-align: center;">Membership</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <!--\n\n    <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n      <ion-input type="text" [(ngModel)]="newmembers" placeholder="Add Member"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addmembers()">Add</button>\n\n    </ion-col>\n\n  </ion-row>\n\n-->\n\n <form [formGroup]="memberForm">\n\n  <ion-list>\n\n    <ion-list-header>\n\n    \n\n    <div style="text-align: center;">Members count: {{sumValue}} &nbsp; <a><button ion-button color="secondary" (click)="openmembermodal()">Open Members List</button></a></div>\n\n    </ion-list-header>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Name</ion-label>\n\n    <ion-input [(ngModel)]="newmembers" placeholder="FirstName LastName" formControlName="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Contact #</ion-label>\n\n    <ion-input [(ngModel)]="contact" type="tel" placeholder="Mobile #" formControlName="contact"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Lifegroup</ion-label>\n\n     <ion-select color="secondary" [(ngModel)]="location" placeholder="Select Location" formControlName="location">\n\n       <ion-option value="Cubao">Cubao-Main</ion-option>\n\n       <ion-option value="Camanava">CAMANAVA</ion-option>\n\n       <ion-option value="Pampanga">Pampanga</ion-option>\n\n       <ion-option value="Laguna">Laguna</ion-option>\n\n       <ion-option value="San-Mateo">San Mateo(Rizal)</ion-option>\n\n       <ion-option value="Antipolo">Antipolo(Rizal)</ion-option>\n\n       <ion-option value="Cavite">Cavite</ion-option>\n\n       <ion-option value="Fairview-Bulacan">Fairview/Bulacan</ion-option>\n\n     </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="secondary" fixed>Ministry</ion-label>\n\n       <ion-select color="secondary" [(ngModel)]="ministry" placeholder="Select Ministry" formControlName="ministry">\n\n          <ion-option value="Youth">Youth</ion-option>\n\n          <ion-option value="EDGE">EDGE</ion-option>\n\n          <ion-option value="Parents">Parents</ion-option>  \n\n       </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" stacked>Email Address</ion-label>\n\n    <ion-input [(ngModel)]="email" type="email" placeholder="Email Address"  formControlName="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Category</ion-label>\n\n      <ion-select color="secondary" [(ngModel)]="category" placeholder="Select Category" formControlName="category">\n\n      <ion-option value="Pastor">Pastor</ion-option>\n\n      <ion-option value="Lifecoach">Lifecoach</ion-option>\n\n      <ion-option value="Mentor">Mentor</ion-option>\n\n      <ion-option value="Member">Member</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  </form>\n\n  <div style="text-align: center;"><a><button ion-button color="secondary" [disabled]="!memberForm.valid" (click)="addmembermaster(newmembers,contact,location,ministry,email,category)">Submit</button></a></div>\n\n</ion-content>\n\n \n\n<!-- <ion-item>\n\n    <ion-avatar item-left>\n\n      <img src="{{u.thumbnailLink}}">\n\n    </ion-avatar>\n\n    <h2>{{u.title}}</h2>\n\n    <p>Author: {{u.owners[0].displayName}}</p>\n\n    <p>Date: {{u.createdDate | date: \'medium\'}}</p>\n\n  <div style="text-align:right;"><a href="{{u.embedLink}}" target="_self">\n\n  <button ion-button color="secondary">View</button></a></div>\n\n  </ion-item>\n\n-->\n\n    <!--<ion-item>\n\n     <div><h2>{{u.Title}}</h2>\n\n      <p class="e2e-inner-html-interpolated">{{u.Body}}</p>\n\n    </div> \n\n    </ion-item> -->'/*ion-inline-end:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_2__providers_sql_storage_sql_storage__["a" /* SqlStorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqlStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SqlStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SqlStorageProvider = (function () {
    function SqlStorageProvider(http, platform, sqlite) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.sqlite = sqlite;
        this.DB_NAME = 'masterdb';
        this.platform.ready().then(function () { _this.configurationdatabase(); });
    }
    SqlStorageProvider.prototype.configurationdatabase = function () {
        this.query('CREATE TABLE IF NOT EXISTS EMP (key text primary key, value text)').catch();
    };
    SqlStorageProvider.prototype.query = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: _this.DB_NAME,
                    location: 'default'
                })
                    .then(function (db) {
                    db.transaction(function (tx) {
                        tx.executeSql(query, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                    });
                })
                    .catch(function (e) { return console.log(e); });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    SqlStorageProvider.prototype.get = function (key) {
        return this.query('select key, value from EMP where key = ? limit 1', [key])
            .then(function (data) {
            if (data.res.rows.length > 0) {
                return data.res.rows.item(0).value;
            }
        });
    };
    SqlStorageProvider.prototype.set = function (key, value) {
        return this.query('insert into EMP(key, value) values (?, ?)', [key, value]);
    };
    return SqlStorageProvider;
}());
SqlStorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
], SqlStorageProvider);

//# sourceMappingURL=sql-storage.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gdriveproviders_gdrive_providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = (function () {
    function ContactPage(navCtrl, _gdrivefiles, firebaseService, formBuilder, alertCtrl, modalCtrl, afd, loading) {
        this.navCtrl = navCtrl;
        this._gdrivefiles = _gdrivefiles;
        this.firebaseService = firebaseService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.afd = afd;
        this.loading = loading;
        this.averageValue = 0;
        this.sumValue = 0;
        this.orderForm = this.formBuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            "contact": ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            "location": ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            "ministry": ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required],
            "invitedby": ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required]
        });
    }
    ContactPage.prototype.addmembers = function (newmembers, contact, location, ministry, email, invitedby) {
        var category = "Member";
        this.firebaseService.addmembers(newmembers, contact, location, ministry, email, invitedby);
        this.firebaseService.addmasterdb(newmembers, contact, location, ministry, email, category, invitedby);
        this.orderForm.reset();
        var alert = this.alertCtrl.create({
            title: 'New Member Added',
            subTitle: 'Welcome to YROCK',
            buttons: [{ text: 'Dismiss',
                    cssClass: 'alertNormal'
                }]
        });
        alert.present();
        //reset sumValue
        this.sumValue = 0;
        this.countnewmembers();
    };
    ContactPage.prototype.opennewmembermodal = function () {
        var newmemberpage = this.modalCtrl.create('NewmembermodalPage');
        newmemberpage.present();
    };
    ContactPage.prototype.countnewmembers = function () {
        var _this = this;
        var loader = this.loading.create({ content: "Loading..." });
        loader.present();
        this.cntmember = this.afd.list('/newmembers/');
        this.cntmember.subscribe(function (data) {
            data.forEach(function (item) {
                // sum here
                _this.sumValue = _this.sumValue + 1;
            });
            loader.dismiss();
        });
    };
    ContactPage.prototype.ngOnInit = function () {
        this.countnewmembers();
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\contact\contact.html"*/'<ion-header>\n\n<ion-navbar color="secondary">\n\n    <ion-title style="text-align: center;">New Friends</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="orderForm">\n\n  <ion-list>\n\n    <ion-list-header>\n\n    <div style="text-align: center;">Attendees count: {{sumValue}} &nbsp; <a><button ion-button color="secondary" (click)="opennewmembermodal()">Check New Friends</button></a></div>\n\n    </ion-list-header>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Name</ion-label>\n\n    <ion-input [(ngModel)]="newmembers" placeholder="FirstName LastName" formControlName="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Contact #</ion-label>\n\n    <ion-input [(ngModel)]="contact" type="tel" placeholder="Mobile #" formControlName="contact"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Lifegroup</ion-label>\n\n         <ion-select color="secondary" [(ngModel)]="location" placeholder="Select location" formControlName="location">\n\n       <ion-option value="Cubao">Cubao-Main</ion-option>\n\n       <ion-option value="Camanava">CAMANAVA</ion-option>\n\n       <ion-option value="Pampanga">Pampanga</ion-option>\n\n       <ion-option value="Laguna">Laguna</ion-option>\n\n       <ion-option value="Sanmateo">San Mateo(Rizal)</ion-option>\n\n       <ion-option value="Antipolo">Antipolo(Rizal)</ion-option>\n\n       <ion-option value="Cavite">Cavite</ion-option>\n\n       <ion-option value="Fairview-Bulacan">Fairview/Bulacan</ion-option>\n\n       <ion-option value="EDGE-Makati">EDGE Makati/Pasay</ion-option>\n\n       <ion-option value="EDGE-Makati">EDGE Cubao</ion-option>\n\n       <ion-option value="EDGE-makati">EDGE BGC</ion-option>\n\n       <ion-option value="EDGE-makati">EDGE Ortigas</ion-option>\n\n       <ion-option value="EDGE-makati">EDGE Eastwood</ion-option>\n\n       <ion-option value="EDGE-makati">EDGE Technohub</ion-option>\n\n       <ion-option value="EDGE-makati">EDGE Manila</ion-option>\n\n     </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="secondary" fixed>Ministry</ion-label>\n\n       <ion-select color="secondary" [(ngModel)]="ministry" placeholder="Select Ministry" formControlName="ministry">\n\n          <ion-option value="Youth">Youth</ion-option>\n\n          <ion-option value="EDGE">EDGE</ion-option>\n\n          <ion-option value="Parents">Parents</ion-option>  \n\n       </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" stacked>Email Address</ion-label>\n\n    <ion-input [(ngModel)]="email" type="email" placeholder="Email Address"  formControlName="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label color="secondary" fixed>Invited By</ion-label>\n\n    <ion-input [(ngModel)]="invitedby" placeholder="Person invited you"  formControlName="invitedby"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  </form>\n\n  <div style="text-align: center;"><a><button ion-button color="secondary" [disabled]="!orderForm.valid" (click)="addmembers(newmembers,contact,location,ministry,email,invitedby)">Submit</button></a></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\contact\contact.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_gdriveproviders_gdrive_providers__["a" /* GdriveprovidersProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_gdriveproviders_gdrive_providers__["a" /* GdriveprovidersProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gdriveproviders_gdrive_providers__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, _gdrivefiles, loading, modalCtrl) {
        this.navCtrl = navCtrl;
        this._gdrivefiles = _gdrivefiles;
        this.loading = loading;
        this.modalCtrl = modalCtrl;
    }
    //Gdrive Call
    HomePage.prototype.getbannerimg = function () {
        var _this = this;
        var loader = this.loading.create({ content: "Loading..." });
        loader.present();
        this._gdrivefiles.gdriveannounce().subscribe(function (res) {
            _this.user = res.items;
            loader.dismiss();
        });
    };
    HomePage.prototype.openmodal = function (eid) {
        var data = { message: eid.id };
        var modalPage = this.modalCtrl.create('ModalPage', data);
        modalPage.present();
    };
    //Eventbrite Call
    /*getevent() {
          let loader = this.loading.create({content: "Loading..."});
          loader.present();
          this._gdrivefiles.eventbriteevent().subscribe(res => {
          this.eventsof = res.events;
          loader.dismiss(console.log(this.eventsof));
      })
  
    }*/
    HomePage.prototype.ionViewWillEnter = function () {
        this.getbannerimg();
        //this.getevent();
    };
    HomePage.prototype.parsedate = function () {
        var vardate = new Date();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title style="text-align: center;">YROCK Apps</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page background">\n\n  <div class="brading">\n\n  <!--    <div style="text-align:center;">\n\n    <a><button ion-button color="secondary">Register</button>\n\n    </a></div> <br />\n\n  -->\n\n  <!--<img src="assets/img/yrock.png">-->\n\n      <ion-slides *ngFor="let u of user">\n\n       <ion-slide>\n\n           <ion-card>\n\n<!--           <img src="{{u.logo.url}}" (click)="openmodal(u)"> -->\n\n          <img src="{{u.webContentLink}}">\n\n           </ion-card>\n\n       </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_gdriveproviders_gdrive_providers__["a" /* GdriveprovidersProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_gdriveproviders_gdrive_providers__["a" /* GdriveprovidersProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_sql_storage_sql_storage__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_firebase_service_firebase_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//Database






var firebaseConfig = {
    apiKey: "AIzaSyCYUt7-XBpHmtG5AqvbLWAAZTd3EOqFUnI",
    authDomain: "yrockdb.firebaseapp.com",
    databaseURL: "https://yrockdb.firebaseio.com",
    projectId: "yrockdb",
    storageBucket: "",
    messagingSenderId: "1084603466535"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/membermodal/membermodal.module#MembermodalPageModule', name: 'MembermodalPage', segment: 'membermodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newmembermodal/newmembermodal.module#NewmembermodalPageModule', name: 'NewmembermodalPage', segment: 'newmembermodal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_13__providers_sql_storage_sql_storage__["a" /* SqlStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, push, alertCtrl) {
        var _this = this;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pushsetup();
        });
    }
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '1084603466535'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            //do whatever you want with the registration ID
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseServiceProvider = (function () {
    function FirebaseServiceProvider(afd) {
        this.afd = afd;
    }
    FirebaseServiceProvider.prototype.getmembers = function () {
        return this.afd.list('/newmembers/');
    };
    FirebaseServiceProvider.prototype.addmembers = function (name, contact, location, ministry, email, invitedby) {
        var createddate = new Date().toDateString();
        this.afd.list('/newmembers/').push({ name: name,
            contact: contact,
            location: location,
            ministry: ministry,
            email: email,
            invitedby: invitedby,
            createddate: createddate });
    };
    FirebaseServiceProvider.prototype.deletemember = function (id) {
        this.afd.list('/newmembers/').remove(id);
    };
    //Master List
    FirebaseServiceProvider.prototype.getmasterdb = function () {
        return this.afd.list('/members/');
    };
    FirebaseServiceProvider.prototype.addmasterdb = function (name, contact, location, ministry, email, category, invitedby) {
        var createddate = new Date().toDateString();
        this.afd.list('/members/').push({ name: name,
            contact: contact,
            location: location,
            ministry: ministry,
            email: email,
            category: category,
            createddate: createddate,
            invitedby: invitedby
        });
    };
    return FirebaseServiceProvider;
}());
FirebaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseServiceProvider);

//# sourceMappingURL=firebase-service.js.map

/***/ })

},[280]);
//# sourceMappingURL=main.js.map