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
  private _pageNumber: number = 2;

    constructor(public navCtrl: NavController,
                public dbComic: MovieServiceProvider) {
                  dbComic.load(1);
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

    doInfinite(infiniteScroll) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        
        this._dbComic.load(this._pageNumber);
        this._pageNumber++;

        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 200);
    }

}
