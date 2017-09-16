webpackJsonp([1],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/movie/movie.module": [
		265,
		0
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_movie_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_movie__ = __webpack_require__(99);
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
    function HomePage(navCtrl, dbComic) {
        this.navCtrl = navCtrl;
        this.dbComic = dbComic;
        this._pageNumber = 2;
        this.buttonClicked = false;
        dbComic.load(1);
        this._dbComic = dbComic;
    }
    HomePage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    HomePage.prototype.pushPage = function (_dbComic) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_movie__["a" /* MoviePage */], {
            dbComic: _dbComic
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this._dbComic.load(_this._pageNumber);
            _this._pageNumber++;
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 200);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Documents\GitProject\MovieCatalog\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!buttonClicked" >Catálogo de Comics</ion-title>\n    <ion-searchbar class="animated fadeInRight" (ionInput)="dbComic.getItems($event)" *ngIf="buttonClicked"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onButtonClick()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n    <ion-list class="item-content">\n        <ion-item class="itemComic" *ngFor="let comic of dbComic.listComicSearch; let i=index;">\n            <ion-card (click)="pushPage(comic)">\n              <img src="https://image.tmdb.org/t/p/w500/{{ comic.poster_path }}"/>\n                <ion-grid class="card-title">\n                  <ion-row >\n                    <h3 col-8 text-left>{{ comic.title }}</h3>\n                    <h4 col-4 text-right>{{ comic.release_date | slice: 0:4}}</h4>\n                  </ion-row>\n                </ion-grid>\n            </ion-card>\n      </ion-item>\n      \n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\GitProject\MovieCatalog\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_movie_service_movie_service__["a" /* MovieServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_movie_service__["a" /* MovieServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_movie_movie__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_movie_service_movie_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movie_movie__["a" /* MoviePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/movie/movie.module#MoviePageModule', name: 'MoviePage', segment: 'movie', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movie_movie__["a" /* MoviePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_movie_service_movie_service__["a" /* MovieServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { MoviePage } from '../pages/movie/movie';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
        this.genres = [
            { _genre: 'Acción', _id: 28 },
            { _genre: 'Aventura', _id: 12 },
            { _genre: 'Animación', _id: 16 },
            { _genre: 'Comedia', _id: 35 },
            { _genre: 'Crimen', _id: 80 }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\GitProject\MovieCatalog\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <ion-item-divider color="light">Generos</ion-item-divider>\n      <button menuClose ion-item *ngFor="let g of genres" (click)="openPage()">\n        {{g._genre}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Documents\GitProject\MovieCatalog\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(238);
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



var MovieServiceProvider = (function () {
    function MovieServiceProvider(http) {
        this.http = http;
        this.listComic = [];
        this.listComicSearch = [];
        this._Comic = [];
        this.listRecommendation = [];
        this._APIKey = "00284bc66287b619fc67b99f83a88a02";
        this._URLBase = "https://api.themoviedb.org/3/";
        // api_key="+ this._APIKey +"&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=true&page="+ index +"&year=2017
        this.searchQuery = '';
        this.cargo = false;
    }
    MovieServiceProvider.prototype.load = function (index, isData) {
        var _this = this;
        if (this.cargo) {
            return Promise.resolve(this.cargo);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this._URLBase + "discover/movie?api_key=" + _this._APIKey + "&sort_by=popularity.desc&page=" + index + "&language=es-ES")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.addMoreComic(data.results);
                resolve(_this.cargo);
            });
        });
    };
    MovieServiceProvider.prototype.loadComic = function (_id) {
        var _this = this;
        this.http.get(this._URLBase + "movie/" + _id + "?api_key=" + this._APIKey + "&language=es-ES")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this._Comic = data;
            _this.setDate;
        });
    };
    MovieServiceProvider.prototype.loadRecommendation = function (_id) {
        var _this = this;
        this.http.get(this._URLBase + "movie/" + _id + "/recommendations?api_key=" + this._APIKey + "&language=es-ES")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.listRecommendation = data.results;
        });
    };
    MovieServiceProvider.prototype.setDate = function () {
        this._Comic["release_date"] = new Date(this._Comic["release_date"]);
    };
    MovieServiceProvider.prototype.addMoreComic = function (_listComic) {
        this.listComic = this.listComic.concat(_listComic);
        this.listComicSearch = this.listComicSearch.concat(_listComic);
    };
    MovieServiceProvider.prototype.initializeItems = function () {
        this.listComicSearch = this.listComic;
    };
    MovieServiceProvider.prototype.getComicList = function () {
        return this.listComic;
    };
    MovieServiceProvider.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listComicSearch = this.listComicSearch.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.release_date.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return MovieServiceProvider;
}());
MovieServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MovieServiceProvider);

var _a;
//# sourceMappingURL=movie-service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_movie_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviePage = MoviePage_1 = (function () {
    function MoviePage(navCtrl, navParams, dbComic) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbComic = dbComic;
        this._dbComic = navParams.get("dbComic");
        dbComic.loadComic(this._dbComic["id"]);
        dbComic.loadRecommendation(this._dbComic["id"]);
    }
    MoviePage.prototype.pushPage = function (_dbComic) {
        this.navCtrl.push(MoviePage_1, {
            dbComic: _dbComic
        });
    };
    MoviePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComicPage');
    };
    return MoviePage;
}());
MoviePage = MoviePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-movie',template:/*ion-inline-start:"C:\Users\Usuario\Documents\GitProject\MovieCatalog\src\pages\movie\movie.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ dbComic._Comic.title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  \n  <ion-card class="bg_image">\n    <img src="https://image.tmdb.org/t/p/w500/{{ dbComic._Comic.backdrop_path }}"/>\n  </ion-card>\n  <ion-grid class="contentComic">\n    <ion-row class="imageandtextOneComic">\n      <ion-col col-4>\n        <ion-card class="miniComicIMG">\n          <img src="https://image.tmdb.org/t/p/w500/{{ dbComic._Comic.poster_path }}"/>\n        </ion-card>      \n      </ion-col>\n      <ion-col col-8>\n          <h2 class="comicTitle">{{ dbComic._Comic.title }}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row class="dataComic">\n        <ion-col col-4 text-center>Puntuación:<br><ion-badge>{{ dbComic._Comic.vote_average }}/10</ion-badge></ion-col>\n        <ion-col col-4 text-center>Lanzamiento:<br><ion-badge>{{ dbComic._Comic.release_date |  date:\'dd/MM/yyyy\' }}</ion-badge></ion-col>\n        <ion-col col-4 text-center>Duración:<br><ion-badge>{{ dbComic._Comic.runtime }} min.</ion-badge></ion-col>\n        <ion-col col-12 text-left margin-left>Categorias:<br>\n          <ion-badge *ngFor="let genre of dbComic._Comic.genres">{{ genre.name }}</ion-badge>\n        </ion-col>\n        <ion-col col-12>\n            <h3>Resumen</h3>\n            <p padding text-justify>{{ dbComic._Comic.overview}}</p>\n        </ion-col>\n    </ion-row>\n    <ion-row class="recomementaionMovies">\n        <ion-col col-12>\n          <h3>Recomendaciones</h3>\n        <ion-slides class="galleryRecommendation " loop="true" slidesPerView="3">\n          <ion-slide *ngFor="let movie of dbComic.listRecommendation">\n            <img class="recomMov" src="https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}" (click)="pushPage(movie)" imageViewer/>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\GitProject\MovieCatalog\src\pages\movie\movie.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_movie_service_movie_service__["a" /* MovieServiceProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_movie_service__["a" /* MovieServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_movie_service__["a" /* MovieServiceProvider */]) === "function" && _c || Object])
], MoviePage);

var MoviePage_1, _a, _b, _c;
//# sourceMappingURL=movie.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map