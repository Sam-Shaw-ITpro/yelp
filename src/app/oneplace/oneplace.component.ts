import { Component, OnInit } from '@angular/core';
import { FetchService } from "../fetch.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Place } from '../place.model';

@Component({
  selector: 'app-oneplace',
  templateUrl: './oneplace.component.html',
  styleUrls: ['./oneplace.component.css']
})
export class OneplaceComponent implements OnInit {
  error = '';
  place: object;
  // Place = '';
  // Place: any[];

  constructor(
    private fetchservice: FetchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      console.log('in oneplace', id)
      this.showOne(id);
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
        console.log('place ', this.place);
        // console.log('name ', this.place.name);
        console.log(id);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
          // console.log(iTerm, iLocation, iPrice);
        });
  }
}