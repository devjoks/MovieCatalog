import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
  providers: [ MovieServiceProvider ]
})
export class MoviePage {

  private _dbComic: MovieServiceProvider;
  
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public dbComic: MovieServiceProvider) {
                  this._dbComic = navParams.get("dbComic");
                  dbComic.loadComic(this._dbComic["id"]);
                  dbComic.loadRecommendation(this._dbComic["id"]);
    }
  
    pushPage(_dbComic){
      this.navCtrl.push(MoviePage,{
        dbComic: _dbComic
      });
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ComicPage');
    }

}
