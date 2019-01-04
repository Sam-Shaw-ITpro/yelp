import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Place } from './place.model';
import { Results } from './results.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer nGbkm3vZ4aJXGGbcQXuUwHTpV11iMHpMJZZcdmbguQsiGGEXEqajFDQY4UQAVc4bSwpqENszU1X5CxUxSZ1wspiXu35s8FmF6y0QpRYJVBWXp9zo-OnUgbc51ZkaXHYx`,
  })
};

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(
    private http: HttpClient
  ) { }

  // &open_now=true
  // (Drink: AllOrdersFromService)

  getMany(currentLat, currentLong): Observable<Results> {
    return this.http.get<Results>(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=pizza&latitude=${currentLat}&longitude=${currentLong}`, httpOptions);
  }

  getOne(id): Observable<Place> {
    return this.http.get<Place>(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, httpOptions);
  }

}