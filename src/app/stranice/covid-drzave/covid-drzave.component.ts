import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { DrzavaModel } from 'src/app/interfaces/drzava-model';
import { ApiService } from 'src/app/servisi/api.service';

@Component({
  selector: 'app-covid-drzave',
  templateUrl: './covid-drzave.component.html',
  styleUrls: ['./covid-drzave.component.scss']
})
export class CovidDrzaveComponent implements OnInit, OnDestroy {

  
  listaDrzava: DrzavaModel[] = [];
  listaDrzava$: Observable<DrzavaModel[]>;
  terminPretrage: string;
  //ucitavanjeUToku: boolean = false;
  //listaPretplata: Subscription = new Subscription;
  constructor(private notif: MatSnackBar, private servis: ApiService) { }

  ngOnInit() {
    //this.ucitavanjeUToku=true;
    this.servis.getDrzave().subscribe((rezultat) => {
      this.listaDrzava = rezultat;
      //this.ucitavanjeUToku = false;
    },
      (greska) => {
        //this.ucitavanjeUToku = false;
        this.notif.open('An error occured, please try again later', 'Close')
      });
    
    //this.listaDrzava$ = this.servis.getDrzave();
    }

  pretrazi() {
    this.listaDrzava = this.listaDrzava.filter((drzava) => {return drzava.name.common.toLowerCase().includes(this.terminPretrage.toLowerCase())});
    
  }

  ngOnDestroy() {
  }

}
