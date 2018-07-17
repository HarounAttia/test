import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth:boolean;
  constructor(private userservice:UserService) { }

  ngOnInit() {

  }

  getsign(){

    return this.userservice.isAuth;
  }
  signout(){

    this.userservice.isAuth=false;
    this.userservice.sucess='error';
    this.userservice.data='';
  }
}
