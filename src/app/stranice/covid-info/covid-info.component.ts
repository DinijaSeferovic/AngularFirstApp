import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CovidModel } from 'src/app/interfaces/covid-model';
import { ApiService } from 'src/app/servisi/api.service';
import * as _ from 'lodash';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.scss']
})
export class CovidInfoComponent implements OnInit {

  covidInfo: CovidModel[];
  ukupnoZarazenih: number;
  ukupnoSmrtnihSlucajeva: number;
  ukupnoOporavljenih: number;
  nazivDrzave: string;
  danasnjiDatum: string;
  maxDnevniBrojZarazenih: CovidModel;
  maxDnevniBrojUmrlih: CovidModel;
  maxOporavljenih: CovidModel;
  brojStanovnika: number;
  procenatUmrlihNaBrStanovnika: number;
  procenatUmrlihNaBrZarazenih: number;
  prosjecanBrojZarazenih: number;

  grafikonPodaciZarazenih: ChartDataSets[] = [];
  grafikonPodaciUmrlih: ChartDataSets[] = [];
  grafikonLabele: Label[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.nazivDrzave = params.id;

      this.api.getCovidInfo(this.nazivDrzave).subscribe((rezultat: CovidModel[])=>{
        this.covidInfo = rezultat;
        this.brojStanovnika = this.covidInfo[0].population;
        this.ukupnoZarazenih = this.covidInfo[this.covidInfo.length-1].confirmed;
        this.ukupnoSmrtnihSlucajeva = this.covidInfo[this.covidInfo.length-1].deaths;
        this.danasnjiDatum = this.covidInfo[this.covidInfo.length-1].date;
      
        this.maxDnevniBrojZarazenih = _.maxBy(this.covidInfo, (dan) => dan.confirmed_daily);
        this.maxDnevniBrojUmrlih = _.maxBy(this.covidInfo, (dan) => dan.deaths_daily);
        this.maxOporavljenih = _.maxBy(this.covidInfo, (dan) => dan.recovered);
      
        this.procenatUmrlihNaBrStanovnika = (this.ukupnoSmrtnihSlucajeva/this.brojStanovnika)*100;
        this.procenatUmrlihNaBrZarazenih = (this.ukupnoSmrtnihSlucajeva/this.ukupnoZarazenih)*100;
        
        this.prosjecanBrojZarazenih = _.mean(this.covidInfo.map((dan) => dan.confirmed_daily));

        this.grafikonPodaciZarazenih = [{
          data: [... this.covidInfo.map((dan) => dan.confirmed_daily)], 
          label: 'Daily confirmed cases',
          barThickness: 2
        }]
        this.grafikonLabele = [... this.covidInfo.map((dan) => this.datePipe.transform(dan.date, 'dd.MM.yy.'))]
        
        this.grafikonPodaciUmrlih = [{
          data: [... this.covidInfo.map((dan) => dan.deaths_daily).filter((umrli) => umrli>=0)], 
          label: 'Daily deaths',
          backgroundColor: 'rgb(63,81,181)',
          barThickness: 2
        }]
      
      })
    })
  }

}
