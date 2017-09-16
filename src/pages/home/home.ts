import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { MoviePage } from '../movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ MovieServiceProvider ]
})
export class HomePage {

  private _dbComic: MovieServiceProvider;
  
    constructor(public navCtrl: NavController,
                public dbComic: MovieServiceProvider) {
                  dbComic.load();
                  this._dbComic = dbComic;
    }
    public buttonClicked: boolean = false;
  
    public onButtonClick(){
      this.buttonClicked = !this.buttonClicked;
    }
  
    pushPage(_dbComic){
      this.navCtrl.push(MoviePage,{
        dbComic: _dbComic
      });
    }

}
