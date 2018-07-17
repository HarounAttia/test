import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {CountryService} from "../../services/country.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {
  countryform: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private countryservice: CountryService,
              private router:Router
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.countryform = this.formbuilder.group({

      Countryname: '',

      continentid: '',

      population: 0


    });

  }


  addCountry(countryname, continentid, population, ) {
    this.countryservice.addCountry(countryname, continentid, population );

    this.router.navigate(['/countries'])

  }
}
