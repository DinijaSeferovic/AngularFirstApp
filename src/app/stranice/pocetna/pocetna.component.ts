import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { DrzavaModel } from 'src/app/interfaces/drzava-model';
import { ApiService } from 'src/app/servisi/api.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit, OnDestroy {

  listaDrzava: DrzavaModel[] = [];
  listaDrzava$: Observable<DrzavaModel[]>;
  terminPretrage: string;
  //ucitavanjeUToku: boolean = false;
  //listaPretplata: Subscription = new Subscription;
  constructor(private notif: MatSnackBar, private servis: ApiService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
  }
}
