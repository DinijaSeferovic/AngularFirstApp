import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrzavaModel } from 'src/app/interfaces/drzava-model';
import { ApiService } from 'src/app/servisi/api.service';

@Component({
  selector: 'app-drzava-detalji',
  templateUrl: './drzava-detalji.component.html',
  styleUrls: ['./drzava-detalji.component.scss']
})
export class DrzavaDetaljiComponent implements OnInit {
  drzava: DrzavaModel;
  constructor(private putanja: ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    this.putanja.params.subscribe((podaci:any) => {
      this.api.getDrzavaPoCca3Kodu(podaci.id).subscribe((drzava) => { 
        this.drzava = drzava[0];
      })
    })
  }

}
