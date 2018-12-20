import { Component, OnInit, Input } from '@angular/core';
import { FetchService } from "./fetch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  iTerm: string;
  iLocation: string;
  iPrice: number;
  title = 'yelp it';
  error = '';
  results = '';

  constructor(
    private fetchservice: FetchService
  ) { }

  ngOnInit() {
    console.log(`we're on`)
  }


  searchItYelp(iTerm, iLocation, iPrice): void {
    this.fetchservice.yelpIt(iTerm, iLocation, iPrice).subscribe
      (Results => {
        this.results = Results;
        console.log('results   ', this.results);
        console.log(iTerm, iLocation, iPrice);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
          console.log(iTerm, iLocation, iPrice);
        });
  }
}