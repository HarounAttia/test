import { Component, OnInit } from '@angular/core';
import {ContinentService} from "../../services/continent.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  continentform: FormGroup;
id;
  constructor(private formbuilder: FormBuilder,
              private continentservice: ContinentService,
              private router:Router,
              private activatedroute:ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.continentform = this.formbuilder.group({

      continentname: '',
      continentlocation:''



    });

  }
  updatecontinent(continentname, continentlocation) {
    this.activatedroute.params.subscribe(params =>{
this.id=+params.id;
console.log(params.id);


    this.continentservice.updateContinent(continentname, continentlocation,params.id);
    this.router.navigate(['/continents'])
    })
  }
}
