import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieServiceProvider {

  private listComic:any[] = [];
  private listComicSearch:any[] = [];
  private _Comic:any[] = [];
  private listRecommendation:any[] = [];
  // private lastList:any[] = [];

  cargo: any;
  private _APIKey:String = "00284bc66287b619fc67b99f83a88a02";
  private _URLBase: String = "https://api.themoviedb.org/3/";
  // searchQuery: string = '';
  
  constructor(public http: Http) {
  
    this.cargo = false;

  }

  public load(index?: number, 
       isData?: boolean){
    if(this.cargo){
      return Promise.resolve(this.cargo);
    }
    return new Promise( resolve => {
      this.http.get(this._URLBase + "discover/movie?api_key="+ this._APIKey +"&sort_by=popularity.desc&page="+ index + "&language=es-ES")
      .map( res => res.json())
      .subscribe (data => {
        this.addMoreComic(data.results);
        resolve(this.cargo);
      });
    })
  }

  public loadComic(_id: number){
    this.http.get(this._URLBase + "movie/" + _id + "?api_key="+ this._APIKey + "&language=es-ES")
    .map( res => res.json())
    .subscribe (data => {
      this._Comic = data;
      this.setDate;
    });
  }

  public loadRecommendation(_id: number){
    this.http.get(this._URLBase + "movie/" + _id + "/recommendations?api_key="+ this._APIKey + "&language=es-ES")
    .map( res => res.json())
    .subscribe (data => {
      this.listRecommendation = data.results;
    });
  }

  private setDate(){
    this._Comic["release_date"] = new Date(this._Comic["release_date"]);
  }
  private addMoreComic(_listComic:any[]){
    // if(!(JSON.stringify(this.lastList) === JSON.stringify(_listComic))){
      this.listComic = this.listComic.concat(_listComic);
      this.listComicSearch = this.listComicSearch.concat(_listComic);
    //   this.lastList = _listComic;
    // }
  }
  private initializeItems() {
    this.listComicSearch = this.listComic;
  }

  public getComicList(){
    return this.listComic;
  }
  
  public getItems(ev: any) {

    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.listComicSearch = this.listComicSearch.filter((item) => {
        // if(item.title.toLowerCase().indexOf(val.toLowerCase()) == -1){
        //   this.loadQuery(val);
        // }
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.release_date.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    }
  }

  // loadQuery(_query:String){
  //   this.http.get(this._URLBase + "search/movie?api_key="+ this._APIKey + "&language=es-ES&page=1&query=" + _query)
  //   .map( res => res.json())
  //   .subscribe (data => {
  //     this.addMoreComic(data.results);
  //   });
// }

}
