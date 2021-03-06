import { Component } from '@angular/core';
import { searchService } from './app.service';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'iTunes';
  name = 'Artist Name:';
  sr = 'Results for song';
  public loading = false;

  constructor(public itunes: searchService) {
  }

  doSearch(term: string) {
      this.loading = true;
      this.itunes.search(term).then(() => {this.loading = false; });
  }
}
