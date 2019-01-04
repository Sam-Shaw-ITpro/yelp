import { Component, OnInit } from '@angular/core';
import { FetchService } from "../fetch.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-manyplaces',
  templateUrl: './manyplaces.component.html',
  styleUrls: ['./manyplaces.component.css']
})
export class ManyplacesComponent implements OnInit {
  error = '';
  results: object;
  currentLat: string;
  currentLong: string;

  constructor(
    private fetchservice: FetchService,
    private router: Router
  ) { }

  ngOnInit() { }

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
    this.fetchservice.getMany(currentLat, currentLong)
      .subscribe(Results => {
        this.results = Results.businesses;
        console.log('results   ', this.results);

      },
        error => {
          this.error = error;
          console.log('error', this.error);
        });
  }
}