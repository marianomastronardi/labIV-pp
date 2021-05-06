import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';

@Component({
  selector: 'app-rep-details',
  templateUrl: './rep-details.component.html',
  styleUrls: ['./rep-details.component.css']
})
export class RepDetailsComponent implements OnInit {

  @Input() repartidor!:Repartidor;
  constructor() { }

  ngOnInit(): void {
  }

}
