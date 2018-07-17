import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddcountryComponent } from './countries/addcountry/addcountry.component';
import { ShowcountriesComponent } from './countries/showcountries/showcountries.component';
import { AddcontinentComponent } from './continents/addcontinent/addcontinent.component';
import { ShowcontinentComponent } from './continents/showcontinent/showcontinent.component';
import {RouterModule} from "@angular/router";
import {Router} from "@angular/router";
import {Routes} from "@angular/router";
import {CountryService} from "./services/country.service";
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {ContinentService} from "./services/continent.service";
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './users/register/register.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './users/login/login.component';
import {UserService} from "./services/user.service";
import {AuthGuard} from "./services/authguard.service";
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './continents/update/update.component';
import {UpdateComponent as Up}   from "./countries/update/update.component";
import { Ng2SmartTableModule } from 'ng2-smart-table';

const approutes
: Routes = [
  {path:'home', component: HomeComponent},
  {path:'continents', canActivate: [AuthGuard], component: ShowcontinentComponent},
  {path:'countries/add', canActivate: [AuthGuard], component: AddcountryComponent},
  {path:'continents/add', canActivate: [AuthGuard], component: AddcontinentComponent},
  {path:'countries', canActivate: [AuthGuard],component: ShowcountriesComponent},
  {path:'signin',component: RegisterComponent},
  {path:'update/:id',component: UpdateComponent},
  {path:'updatecountry/:id',component: Up},
  {path:'login',component: LoginComponent},




];
@NgModule({
  declarations: [
    AppComponent,
    AddcountryComponent,
    ShowcountriesComponent,
    AddcontinentComponent,
    ShowcontinentComponent,

    NavbarComponent,

    RegisterComponent,

    LoginComponent,

    HomeComponent,

    UpdateComponent,
    Up
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    Ng2SmartTableModule
  ],
  providers: [CountryService, ContinentService, UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
