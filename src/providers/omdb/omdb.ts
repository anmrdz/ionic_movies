import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OmdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OmdbProvider {
  private key: string;
  private url: string;
  //Inject a dependency called http type: HttpClient
  constructor(public http: HttpClient) {
    console.log('Hello OmdbProvider Provider');
    this.key = "c9875e7b";
    this.url = "http://www.omdbapi.com/"
  }

  public searchMovie(title: string):any {
    return this.http.get(this.url, {
      params: {
          apiKey: this.key,
          t : title
    }
  });
}

}
