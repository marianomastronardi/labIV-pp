import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public fg!: FormGroup;
  isLogged:boolean = false;
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private route:Router) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    })
  }

  login(){
    this.authService.isLoggedIn = this.fg.valid;
    this.route.navigate(['/bienvenida']);
  }

}
