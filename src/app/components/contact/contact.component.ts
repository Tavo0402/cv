import { Component, OnInit } from '@angular/core';
import { Path, PersonalInfo } from '../../config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent implements OnInit {
  country: string = PersonalInfo.country;
  state: string = PersonalInfo.state;
  city: string = PersonalInfo.city;
  email: string = PersonalInfo.email;
  phone: string = PersonalInfo.phone;
  linkedIn: string = PersonalInfo.linkedIn;
  constructor() {}

  ngOnInit(): void {}
}
