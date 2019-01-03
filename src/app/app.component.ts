import { Component, OnInit, Input } from '@angular/core';
import { FetchService } from "./fetch.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pie Me!';
  error = '';
  results = [];
  Place = '';
  place = [];
  currentLat: string;
  currentLong: string;

  constructor(
    private fetchservice: FetchService,
    private router: Router
  ) { }

  ngOnInit() {
}
  
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

  showOne(id): void {
    this.fetchservice.getOne(id).subscribe
      (Place => {
        this.place = Place;
        console.log('place   ', this.place);
        console.log(id);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
          // console.log(iTerm, iLocation, iPrice);
        });
  }


}


// searchItYelp(iLocation): void {
//   this.fetchservice.yelpIt(iLocation).subscribe
//     (Results => {
//       this.results = Results;
//       console.log('results   ', this.results);
//       console.log(iLocation);
//     },
//       error => {
//         this.error = error;
//         console.log('error', this.error);
//         // console.log(iTerm, iLocation, iPrice);
//       });
// }
// }



// searchItYelp(iTerm, iLocation, iPrice): void {
//   this.fetchservice.yelpIt(iTerm, iLocation, iPrice).subscribe
//     (Results => {
//       this.results = Results;
//       console.log('results   ', this.results);
//       console.log(iTerm, iLocation, iPrice);
//     },
//       error => {
//         this.error = error;
//         console.log('error', this.error);
//         console.log(iTerm, iLocation, iPrice);
//       });
// }
// }

