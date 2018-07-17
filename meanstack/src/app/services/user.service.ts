import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Http} from "@angular/http";
import {message, Sidebar, Users, TokenResponse} from "../../../index/components/users";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  URL='http://localhost:3000/users';
  URL2='http://localhost:3000/register';
  URL4='http://localhost:3000/registers';
  URL3='http://localhost:3000/me';
  isAuth=false;
  constructor(private http: HttpClient, private router :Router) {
  }
  data:any;
error:string;
  sucess='error';
  adduser(fullname, email, Password) {
    const obj = {
      fullname: fullname,
      email: email,
      Password: Password

    };
    this.http.post<message>(`${this.URL2}`, obj).subscribe(data=>{
      if(data.msg == 'success')
        this.sucess='good';


    })
  }
  verify(email,password) {

    return this
      .http
      .get<Sidebar>(`${this.URL+'/'+email+'/'+password}`)

  }

  verifys( email, Password) {
    const obj = {

      email: email,
      Password: Password

    };
    let httpOptions = {
      headers: new HttpHeaders({ 'x-access-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNGRiYTgwMzFkN2RjMjU2ZGE4NGM5MyIsIm5hbWUiOiJub29iIiwiaWF0IjoxNTMxODIwNjcyLCJleHAiOjE1MzE5MDcwNzJ9.EtLXF7mNR7gyGvRUH_jrtVtAHLefpnSsUEaCc0kYEPc" })
    };
    return this.http.post<Sidebar>(`${this.URL3}`,obj,httpOptions).subscribe(data => {if(data.sucess)
    {
    this.data=data.sucess;

      console.log(this.data)


        this.router.navigate(['/home'])
        this.verifylogin();
      }
else
    {

  this.sucess='error'
      alert(data.error)}
    });

  }
  adduserss(fullname, email, password){


    const obj = {
      fullname: fullname,
      email: email,
      password: password

    };
    this.http.post<TokenResponse>(`${this.URL4}`, obj).subscribe(data=>{

      //localStorage.setItem('jwtToken', data.token);
console.log(data.token)


    })
  }
  verifylogin(){

      this.isAuth=true;


  }
}
