import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private userservice: UserService,
              private router:Router
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.userform = this.formbuilder.group({

      fullname: ['', Validators.required],

      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],

      Password: ['', Validators.required],


    });

  }



  adduser(fullname, email, Password, ) {
   /* this.userservice.adduser(fullname, email, Password )
    if(this.userservice.sucess =='good') {
      alert('sign in good')
      this.userservice.verifylogin();
      this.router.navigate(['/home'])

    }*/
this.userservice.adduserss(fullname,email,Password);


  }
  navigato(){
    this.router.navigate(['/login']);
  }

}
