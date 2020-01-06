import { Component, OnInit } from '@angular/core';
import { vehicules } from '../vehicules';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {
  vehicules = vehicules;

  constructor() { }

  ngOnInit() {
  }

}