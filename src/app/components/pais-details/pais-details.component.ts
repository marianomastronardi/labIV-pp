import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pais-details',
  templateUrl: './pais-details.component.html',
  styleUrls: ['./pais-details.component.css']
})
export class PaisDetailsComponent implements OnInit {

  @Input() pais!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
