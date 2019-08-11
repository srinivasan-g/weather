import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges, OnInit {
  public queryList: any;
  public tableHeardelist: any;
  private destroyed = new Subject<boolean>();
  constructor(private store: Store<any>) {
    this.queryList = [];
    this.tableHeardelist = [];
  }

  ngOnInit() {
    this.store.pipe(takeUntil(this.destroyed)).subscribe(store => {
      console.log(store);
      if (store && store.query.length) {
        if (!this.tableHeardelist.length) {
          store.query.forEach(element => {
            element.data.map((item: any, index: number) => {
              const dtText = new Date(item.dt_txt).getHours();
              this.tableHeardelist.push({ name: dtText === 18 ? 6 : dtText, day: dtText === 0 ? 'AM' : dtText >= 12 ? 'PM' : 'AM' });
            });
          });
        }
        this.queryList = store.query;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }
  
  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}


