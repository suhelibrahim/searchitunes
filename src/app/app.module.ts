import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { AppComponent } from './app.component';
import {searchService} from './app.service';
import { ItunesRoutesModule } from './/itunes-routes.module';
import { EnterBtnDirective } from './enter-btn.directive';
@NgModule({
  declarations: [
    AppComponent,
    EnterBtnDirective
  ],
  imports: [
    BrowserModule, HttpModule, ItunesRoutesModule
  ],
  providers: [searchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
