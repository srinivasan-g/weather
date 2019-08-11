import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpBackend } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { query } from '@angular/core/src/render3/instructions';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let httpClient: jasmine.SpyObj<HttpClient>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule, HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [WeatherService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  
});

