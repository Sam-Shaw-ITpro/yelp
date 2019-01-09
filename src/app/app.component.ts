import { Component, OnInit, Input } from '@angular/core';
import { FetchService } from "./fetch.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(
    private fetchservice: FetchService,
    private router: Router
  ) { }

  ngOnInit() {
  }
}