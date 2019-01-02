import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

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
  // iTerm: string;
  // iLocation: string;
  // iPrice: number;


  constructor(
    private http: HttpClient
  ) { }

  // &open_now=true
  pieMe(currentLat, currentLong): Observable<any> {
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=pizza&latitude=${currentLat}&longitude=${currentLong}`, httpOptions);
  }

  getOne(id): Observable<any> {
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, httpOptions);
  }



  // GET https://api.yelp.com/v3/businesses/{id}



  // yelpIt(currentLat, currentLong): Observable<any> {
  //   return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=${iLocation}&price=1`, httpOptions);
  // }                       

  // yelpIt(iTerm, iLocation, iPrice): Observable<any> {
  //   return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${iTerm}&location=${iLocation}&price=${iPrice}`, httpOptions);
  // }                       











}
