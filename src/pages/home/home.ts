import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OmdbProvider } from '../../providers/omdb/omdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public title: string;
  public movie: any;
  public desc: string;
  public img: string;
  constructor(public navCtrl: NavController, public omdb: OmdbProvider) {
      this.title  ="Batman"
  }

  public search(): void {
    this.omdb.searchMovie(this.title).subscribe((response) => {
      this.movie = response;
    });
  }

}
