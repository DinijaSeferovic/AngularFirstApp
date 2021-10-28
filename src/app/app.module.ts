import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { NotFoundComponent } from './statusneStranice/not-found/not-found.component';
import { DrugaComponent } from './stranice/druga/druga.component';
import { NavigacijaComponent } from './statusneStranice/navigacija/navigacija.component';
import { FooterComponent } from './statusneStranice/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule} from "@angular/material/card";
import { DrzavaCardComponent } from './templates/drzava-card/drzava-card.component';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from './stranice/reactive-forms/reactive-forms.component';
import { LoaderComponent } from './templates/loader/loader.component';
import { HttpReqInterceptor } from './interceptors/http-req.interceptor';
import { DrzavaDetaljiComponent } from './stranice/drzava-detalji/drzava-detalji.component';
import { CovidInfoComponent } from './stranice/covid-info/covid-info.component';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './stranice/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    NotFoundComponent,
    DrugaComponent,
    NavigacijaComponent,
    FooterComponent,
    DrzavaCardComponent,
    ReactiveFormsComponent,
    LoaderComponent,
    DrzavaDetaljiComponent,
    CovidInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
