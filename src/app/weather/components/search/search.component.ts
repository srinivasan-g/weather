import { Component, OnDestroy } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Weather, WeatherList } from '../../../model/weather';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnDestroy {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  public query: string;
  public queryList: Array<any>;
  public error: string;

  private destroyed = new Subject<boolean>();
  constructor(private weatherService: WeatherService, private store: Store<any>) {
    this.queryList = [];
  }

  search() {
    // TO BE IMPLEMENTED
    const index = this.queryList.indexOf(this.query);
    if (this.query && index === -1) {
      this.weatherService.searchWeatherForCity(this.query).pipe(
        map((data: Weather) => (data.list)
          .filter((item: WeatherList) => new Date(item.dt_txt).getHours() === 6 ||
            new Date(item.dt_txt).getHours() === 12 ||
            new Date(item.dt_txt).getHours() === 18 ||
            new Date(item.dt_txt).getHours() === 0).filter((item: WeatherList, idx) => idx < 4)),
        takeUntil(this.destroyed)).subscribe(
          params => {
              this.queryList.push(this.query);
              this.storeData('ADD_QUERY', params );
          },
          e =>  {
            this.error = e.error;
            setTimeout(() => {
              this.error = null;
            }, 1500);
          }
        );
    }
  }

  storeData = (name: string, data: any) => {
    this.store.dispatch({
      type: name,
      payload: { name: this.query, data: data }
    });
    this.query = '';
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }
}
