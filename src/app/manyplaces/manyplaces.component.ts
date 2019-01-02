import { Component, OnInit } from '@angular/core';
import { FetchService } from "../fetch.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-manyplaces',
  templateUrl: './manyplaces.component.html',
  styleUrls: ['./manyplaces.component.css']
})
export class ManyplacesComponent implements OnInit {
  title = 'Pie Me!';
  error = '';
  results = '';
  Place = '';
  place = '';
  currentLat: string;
  currentLong: string;

  constructor(
    private fetchservice: FetchService,
    private router: Router
  ) { }

  ngOnInit() {}

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getPos(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getPos(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
    console.log(this.currentLat, this.currentLong)
    this.searchItYelp(this.currentLat, this.currentLong)
  }

  searchItYelp(currentLat, currentLong): void {
    this.fetchservice.pieMe(currentLat, currentLong).subscribe
      (Results => {
        this.results = Results;
        console.log('results   ', this.results);
        // console.log(currentLat, currentLong);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
        });
  }
}