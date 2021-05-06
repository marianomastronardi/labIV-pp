import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private _githubService:GithubService) { }

  ngOnInit(): void {
    this._githubService.getProfile()
    .subscribe((data:any) => {
      this.usuario = data;
    })
  }

}
