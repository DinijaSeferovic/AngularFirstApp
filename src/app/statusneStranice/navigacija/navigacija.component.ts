import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/servisi/auth.service';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss']
})
export class NavigacijaComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.userPodaci.asObservable().subscribe((odg) => {this.user = odg})
  }

  Pocetna() {
    this.router.navigate(['']);
    console.log('Korisnik je kliknuo na dugme Početna');
  }

  Druga() {
    this.router.navigate(['druga']);
  }


  logout(){
    this.auth.logout();
  }

}
