import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Journey } from 'src/app/models/Journey';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { ServicesOpted } from './../../models/ServicesOpted';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, tap, takeUntil, debounceTime, map, delay } from 'rxjs/operators';
import { DataAirport, Airports } from 'src/app/models/DataAirport';

@Component({
  selector: 'app-add-new-journey',
  templateUrl: './add-new-journey.component.html',
  styleUrls: ['./add-new-journey.component.css']
})
export class AddNewJourneyComponent implements OnInit {

  /** list of DataAirports */
  protected airports: DataAirport[] = Airports;

  /** control for the selected DataAirport for server side filtering */
  public DataAirportFromServerSideCtrl: FormControl = new FormControl();

  public DataAirportToServerSideCtrl: FormControl = new FormControl();

  /** control for filter for server side. */
  public DataAirportServerSideFilteringCtrl: FormControl = new FormControl();

  /** indicate search operation is in progress */
  public searching = false;

  /** list of DataAirports filtered after simulating server side search */
  public  filteredServerSideDataAirport: ReplaySubject<DataAirport[]> = new ReplaySubject<DataAirport[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected onDestroy = new Subject<void>();

  ngOnInit() {

    // listen for search field value changes
    this.DataAirportServerSideFilteringCtrl.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this.onDestroy),
        debounceTime(200),
        map(search => {
          if (!this.airports) {
            return [];
          }

          // simulate server fetching and filtering data
          return this.airports.filter( airports => airports.name.toLowerCase().indexOf(search) > -1);
        }),
        delay(500)
      )
      .subscribe(filteredDataAirports => {
        this.searching = false;
        this.filteredServerSideDataAirport.next(filteredDataAirports);
      },
        error => {
          // no errors in our simulated example
          this.searching = false;
          // handle error...
        });

  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
