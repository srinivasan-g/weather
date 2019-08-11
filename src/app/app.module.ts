import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { addQueryReducer } from './weather/store/actions/weather';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpClientModule,
    StoreModule.forRoot({ query: addQueryReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
