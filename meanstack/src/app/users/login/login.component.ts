import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: FormGroup;
error:string;
  constructor(private formbuilder: FormBuilder,
              private userservice: UserService,
              private router: Router
  ) {
  }

  ngOnInit() {

    this.initForm();
  }

  initForm() {

    this.userform = this.formbuilder.group({

      email: '',



      password: ''


    });

  }


  verify(email, Password) {
    this.userservice.verify(email, Password)   .subscribe(  data => {
      if(data.error)
     console.log(data);
      this.error=data.error;

      if(this.error =='incorrect')
      {}
      else if(this.error =='usernotfound')
      {}
      else {alert("Login is successful");


        this.router.navigate(['/home'])
        this.userservice.verifylogin();

      }

    })




  }

  verifys(email, Password){
    this.userservice.verifys(email, Password);


  }


}
