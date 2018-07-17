import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Continent} from "../../../../index/components/continent";
import {ContinentService} from "../../services/continent.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
import {ServerDataSource} from "ng2-smart-table";
import {HttpClient} from "@angular/common/http";
import {Country} from "../../../../index/components/country";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-showcontinent',
  templateUrl: './showcontinent.component.html',
  styleUrls: ['./showcontinent.component.css']
})
export class ShowcontinentComponent implements OnInit {
  continents=[];
  source :ServerDataSource;
name:string;
location:string;
population:number;
  settings = {

    add:{confirmCreate:true},
    delete:{confirmDelete:true},
    edit:{confirmSave:true},
    columns: {
      continentname: {
        title: 'Continentname'
      },
      continentlocation: {
        title: 'Continentlocation',




      },
      numberofcount: {
        title: 'numberofcount',
        editable:false
      }
      ,
      population:{
        title: 'population',
        editable:false
      },

      countries:{
        title:"countryname",
        editable:false,
        valuePrepareFunction: (countries) => {
          return countries.map(s => " " + s.countryname +"  population: "+ s.population+" \n ").toString()
        },
         }
    }
  };
@Input() title;
 array;
r :boolean;
  constructor(private continentservice: ContinentService, private router:Router, private http:HttpClient, private countryservice:CountryService) {this.source = new ServerDataSource(http,{ endPoint: 'http://localhost:3000/continents'});}

  ngOnInit() {
    this.countryservice.getAdUnits()
      .subscribe((data: Country[]) => {  var obj;

        data.forEach((element) =>{
          obj ={value:element.countryname,title:element.countryname,
        }
          this.continents.push(obj)

        })
        console.log(this.source.getElements());



      });


  }


  onDeleteConfirm(event):void {

    this.continentservice.deletecontinent(event.data._id);
    event.confirm.resolve(event.newData);
    this.continentservice
      .getcontinent()
      .subscribe((data: Continent[]) => {
        this.source.load(data);
      });
    //this.router.navigate(['/countries'])

  }
  onCreateConfirm(event):void {

    this.continentservice.addContinent(event.newData.continentname, event.newData.continentlocation);
    event.confirm.resolve(event.newData);
    this.continentservice
      .getcontinent()
      .subscribe((data: Continent[]) => {
        //this.adunits = data;
        this.source.load(data);

      });
  }
  onEditConfirm(event):void {
    console.log(event);
    this.continentservice.updateContinent(event.newData.continentname, event.newData.continentlocation,event.newData._id);
    event.confirm.resolve();
    this.continentservice
      .getcontinent()
      .subscribe((data: Continent[]) => {
       // this.continents = data;
         this.source.load(data);

      });
    //this.router.navigate(['/countries'])

  }




  /*

  deletecontinent(id){
   // console.log(name);

  this.continentservice.deletecontinent(id);
  this.continentservice
    .getcontinent()
    .subscribe((data: Continent[]) => {
      this.continents = data;

      this.router.navigate(['/continents'])

    });

  }
*/



}
