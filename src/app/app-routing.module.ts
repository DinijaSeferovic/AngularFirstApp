import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { NotFoundComponent } from './statusneStranice/not-found/not-found.component';
import { DrugaComponent } from './stranice/druga/druga.component';
import { ReactiveFormsComponent } from './stranice/reactive-forms/reactive-forms.component';
import { DrzavaDetaljiComponent } from './stranice/drzava-detalji/drzava-detalji.component';
import { CovidInfoComponent } from './stranice/covid-info/covid-info.component';
import { LoginComponent } from './stranice/login/login.component';
import { CovidDrzaveComponent } from './stranice/covid-drzave/covid-drzave.component';

const routes: Routes = [
  { path: '', component: PocetnaComponent },
  { path: 'druga', component: DrugaComponent },
  { path: 'reaktivne-forme', component: ReactiveFormsComponent},
  { path: 'drzava-detalji/:id', component: DrzavaDetaljiComponent},
  { path: 'covid-info/:id', component: CovidInfoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'covid-drzave', component: CovidDrzaveComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
