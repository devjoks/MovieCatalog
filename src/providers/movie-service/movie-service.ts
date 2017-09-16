import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  private listComic:any[] = [];
  private listComicSearch:any[] = [];
  private cargo: any;
  searchQuery: string = '';
  
  constructor(public http: Http) {
  
    this.cargo = false;

  }

  load(index?: number, 
       isData?: boolean){
    if(this.cargo){
      return Promise.resolve(this.cargo);
    }
    return new Promise( resolve => {
      this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=00284bc66287b619fc67b99f83a88a02&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&year=2017")
      .map( res => res.json())
      .subscribe (data => {
        this.listComic = data.results;
        this.listComicSearch = data.results;
        resolve(this.cargo);
      });
    })
  }

  getComicList(){
    return this.listComic;
  }

  initializeItems() {
    this.listComicSearch = this.listComic;
  }

  getItems(ev: any) {

    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.listComicSearch = this.listComicSearch.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}