import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/servisi/api.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  osobaForma: FormGroup = this.fromBuilder.group({
    prezime: ['', [Validators.required, Validators.minLength(3)]],
    ime: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private fromBuilder: FormBuilder, private api: ApiService, private notif: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const odgovor = this.api.snimiOsobu(this.osobaForma.value);
    this.notif.open(odgovor, 'Zatvori');
  }

}
