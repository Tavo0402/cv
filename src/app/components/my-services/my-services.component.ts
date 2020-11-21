import { Component, OnInit } from '@angular/core';
import { Path, PersonalInfo } from '../../config';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styles: [],
})
export class MyServicesComponent implements OnInit {
  services: any[] = PersonalInfo.services;
  currentYear: number = new Date().getFullYear();
  firstWorkYear: number = PersonalInfo.firstWorkYear;
  completedProjects: number = PersonalInfo.completedProjects;
  customers: number = PersonalInfo.customers;
  constructor() {}

  ngOnInit(): void {}
}
