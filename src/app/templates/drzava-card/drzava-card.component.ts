import { Component, Input, OnInit } from '@angular/core';
import { DrzavaModel } from 'src/app/interfaces/drzava-model';
import { ApiService } from 'src/app/servisi/api.service';

@Component({
  selector: 'app-drzava-card',
  templateUrl: './drzava-card.component.html',
  styleUrls: ['./drzava-card.component.scss']
})
export class DrzavaCardComponent implements OnInit {

  @Input() drzava: DrzavaModel;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  getIso3Code(naziv: string) {
      this.api.getCovidInfo(naziv).subscribe( ()=>{})
  }

}
