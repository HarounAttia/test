import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {ContinentService} from "../../services/continent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addcontinent',
  templateUrl: './addcontinent.component.html',
  styleUrls: ['./addcontinent.component.css']
})
export class AddcontinentComponent implements OnInit {
  continentform: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private continentservice: ContinentService,
              private router:Router
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


  addcontinent(continentname, continentlocation ) {
    this.continentservice.addContinent(continentname, continentlocation);
    this.router.navigate(['/continents'])

  }

}
