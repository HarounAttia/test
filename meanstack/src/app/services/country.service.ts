import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";
import {Country} from "../../../index/components/country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  URL='http://localhost:3000/countries';
  URL2='http://localhost:3000/addcountry';
  constructor(private http: HttpClient) {
  }

  addCountry(countryname, continentid, population) {
    const obj = {
      countryname: countryname,
      population: population,
      continentid: continentid

    };
    console.log("here")
    console.log(obj);
    this.http.post(`${this.URL2}`, obj)
      .subscribe(res => console.log('Done'));
  }
  getAdUnits() {
    return this
      .http
      .get(`${this.URL}`);
  }
  deletecountry(name) {
    if (confirm('do you want to delete this?')) {
      return this
        .http
        .get(`${this.URL + '/' + name}`).subscribe(data => {
          console.log(data)
        });
    }
  }
  updatecountry(countryname, population,continentid, id) {
    const obj = {
      countryname: countryname,

      population: population,
      continentid:continentid

    };
    console.log(obj);
    console.log(id);
    this.http.post(`${this.URL2+'/'+id}`, obj)
      .subscribe(res => console.log(res));

  }
}
