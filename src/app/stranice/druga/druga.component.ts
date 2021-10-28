import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/servisi/api.service';

@Component({
  selector: 'druga',
  templateUrl: './druga.component.html',
  styleUrls: ['./druga.component.scss']
})
export class DrugaComponent implements  OnInit, OnDestroy {

  listaPretplata: Subscription = new Subscription;
  constructor(private notif: MatSnackBar, private servis: ApiService) { }

  ngOnInit() {
    this.servis.getCovidPodaci
  }

  ngOnDestroy() {
  }

}
