import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {CountryService} from "../../services/country.service";
import { Country} from "../../../../index/components/country";
import {Router} from "@angular/router";
import {ContinentService} from "../../services/continent.service";
import {Continent, Mine} from "../../../../index/components/continent";
import { ServerDataSource } from "ng2-smart-table";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-showcountries',
  templateUrl: './showcountries.component.html',
  styleUrls: ['./showcountries.component.css']
})
export class ShowcountriesComponent implements OnInit {
adunits:Country[];
continents=[];
name:string;
population:string;
source :ServerDataSource;

  settings = {
mode:'inline',
    actions:{
      delete:true,


      },
add:{confirmCreate:true},
    delete:{confirmDelete:true},
edit:{confirmSave:true},
    columns: {



      countryname: {
        editable:true,
        title: 'countryname'
      },
      continentid: {
        editable:true,
        title: 'continentid',
        type:'list',
        editor:{
          type:'list',
        config: {
          list: []

        }
        }

      },
      population: {
        editable:true,
        title: 'Population'
      }
    }

  };
  constructor(private countryservice: CountryService, private router: Router, private continentservice: ContinentService, private http:HttpClient) {
    this.source = new ServerDataSource(http,{ endPoint: 'http://localhost:3000/countries' });

  }
  onCreateConfirm(event):void {

    this.countryservice.addCountry(event.newData.countryname,event.newData.continentid,event.newData.population);
    event.confirm.resolve(event.newData);
    this.countryservice
      .getAdUnits()
      .subscribe((data: Country[]) => {
        //this.adunits = data;
        this.source.load(data);

      });
    //this.router.navigate(['/countries'])

  }

  onEditConfirm(event):void {
console.log(event);
    this.countryservice.updatecountry(event.newData.countryname,event.newData.population,event.newData.continentid,event.newData._id);
    event.confirm.resolve();
    this.countryservice
      .getAdUnits()
      .subscribe((data: Country[]) => {
        //this.adunits = data;
       // this.source.load(data);

      });
    //this.router.navigate(['/countries'])

  }
  onDeleteConfirm(event):void {

   this.countryservice.deletecountry(event.data._id);
    event.confirm.resolve(event.newData);
    this.countryservice
      .getAdUnits()
      .subscribe((data: Country[]) => {
        this.source.load(data);
      });
    //this.router.navigate(['/countries'])

  }
  ngOnInit() {
    this.continentservice.getcontinent()
      .subscribe((data: Continent[]) => {  var obj;

        data.forEach((element) =>{
          obj ={value:element.continentname,title:element.continentname}
     this.continents.push(obj)

        })
        this.settings.columns.continentid.editor.config.list = this.continents;
        this.settings = Object.assign({}, this.settings);


      });


  }
  functionr(){

  }
deletecountry(id){
    this.countryservice.deletecountry(id);
  this.countryservice
    .getAdUnits()
    .subscribe((data: Country[]) => {
      this.adunits = data;
    });
  this.router.navigate(['/countries'])

}

}
