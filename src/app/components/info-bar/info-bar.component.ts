import { Component, OnInit } from '@angular/core';
import { Path, PersonalInfo } from '../../config';
@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styles: [],
})
export class InfoBarComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  path: string = Path.url;
  name: string = PersonalInfo.name;
  title: string = PersonalInfo.title;
  country: string = PersonalInfo.country;
  state: string = PersonalInfo.state;
  city: string = PersonalInfo.city;
  age: number = this.currentYear - PersonalInfo.year;
  languages: any[] = PersonalInfo.languages;
  others: any[] = PersonalInfo.others;
  constructor() {}

  ngOnInit(): void {}
}
