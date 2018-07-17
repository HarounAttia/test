import {Country} from "./country";

export interface Continent {
  continentname:  string,
  continentlocation: string,
  population: number,
  numberofcount:number,
  countries: Country[]
}
export interface Mine {
  value:string,
  title: string

}
