import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";
import {Continent} from "../../../index/components/continent";

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  URL='http://localhost:3000/continents';
  URL2='http://localhost:3000/addcontinent';
  constructor(private http: HttpClient) {
  }

  getcontinent() {
    return this
      .http
      .get(`${this.URL}`);
  }
  deletecontinent(name) {
    return this
      .http
      .get(`${this.URL+'/'+name}`).subscribe(data =>{console.log(data)});
  }


  addContinent(continentname, continentlocation) {
    const obj = {
      continentname: continentname,

      continentlocation: continentlocation

    };
    this.http.post(`${this.URL2}`, obj)
      .subscribe(res => console.log('Done'));

  }
  updateContinent(continentname, continentlocation,id) {
    const obj = {
      continentname: continentname,

      continentlocation: continentlocation

    };
    this.http.post(`${this.URL2+'/'+id}`, obj)
      .subscribe(res => console.log(res));

  }

}
