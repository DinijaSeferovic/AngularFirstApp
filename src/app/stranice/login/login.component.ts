import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servisi/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForma: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForma = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.auth.login(this.loginForma.value).subscribe((odg) => this.router.navigate(['']))
  }

}
