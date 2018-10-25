import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule, Http, Response} from '@angular/http';
import { AppComponent } from './app.component';
import {searchService} from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [searchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
