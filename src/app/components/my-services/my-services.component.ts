import { Component, OnInit } from '@angular/core';
import { Path, PersonalInfo } from '../../config';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styles: [],
})
export class MyServicesComponent implements OnInit {
  services: any[] = PersonalInfo.services;
  constructor() {}

  ngOnInit(): void {}
}
