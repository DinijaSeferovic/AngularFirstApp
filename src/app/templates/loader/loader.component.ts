import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/servisi/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  ucitavanjeUToku$: Observable<boolean>;

  constructor(private loader: LoadingService) { }

  ngOnInit(): void {
    this.ucitavanjeUToku$ = this.loader.isLoading$;
  }

}
