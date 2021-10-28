import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DrzavaModel } from '../interfaces/drzava-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getDrzave(): Observable<DrzavaModel[]> {
    return this.http.get<DrzavaModel[]>('https://restcountries.com/v3.1/all');
  }

  public getDrzavaPoCca3Kodu(cca3Kod: string) {
    return this.http.get(`https://restcountries.com/v3.1/alpha/${cca3Kod}`)
  }

  public snimiOsobu(osoba:any) {
    //this.http.post('adresa apija', osoba); //osoba treba biti model
    console.log('Api servis:', osoba);
    return `Uspjesno ste unijeli podatke o: ${osoba.prezime} ${osoba.ime}`;
    //ili poruka= 'Uspjesno ste unijeli podatke o osobi: ' + osoba.prezime + ' ' + osoba.ime

  }

  public getCovidPodaci(cca3: string){

    return this.http.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?country_iso3=${cca3}`);

  }

  public getCovidInfo(naziv: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${naziv}`).pipe(switchMap((drzave:DrzavaModel[])=>{
      let drzava = drzave[0];
      return this.http.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?country_iso3=${drzava.cca3}`);
//u slucaju da nemamo potreban podatak za drugi api, pomocu pipe ubacimo u funkciju switchMap koji poziva novi api i iz njega dobavlja potrebne podatke
    }))
  }
}
