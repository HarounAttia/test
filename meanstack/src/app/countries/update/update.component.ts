import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  countryform: FormGroup;
  id;
  constructor(private formbuilder: FormBuilder,
              private countryservice: CountryService,
              private router:Router,
              private activatedroute:ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.countryform = this.formbuilder.group({

      countryname: '',
      population:'',
      continentid:''



    });

  }
  updatecountry(countryname, population, continentid) {
    this.activatedroute.params.subscribe(params =>{
      this.id=+params.id;
      console.log(params.id);


      this.countryservice.updatecountry(countryname, population,continentid, params.id);
      this.router.navigate(['/countries'])
    })
  }
}
