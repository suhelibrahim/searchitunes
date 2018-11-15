import { Component } from '@angular/core';
import { searchService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'iTunes';
  name='Artist Name:';
  sr='Results for song';
  public loading: boolean = false;

  constructor(public itunes:searchService){
  }
  
  doSearch(term:string){
      this.loading=true;
      this.itunes.search(term).then(()=>{this.loading=false;});
  }
}
