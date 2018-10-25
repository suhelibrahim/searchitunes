import { Component } from '@angular/core';
import { searchService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'iTunes';
  private loading: boolean = false;

  constructor(private itunes:searchService){
  }
  
  doSearch(term:string){
      this.loading=true;
      this.itunes.search(term).then(()=>{this.loading=false;});
  }
}
