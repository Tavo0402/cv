import { Component, OnInit } from '@angular/core';
import { Path, PersonalInfo } from '../../config';
@Component({
  selector: 'app-education-work-history',
  templateUrl: './education-work-history.component.html',
  styles: [],
})
export class EducationWorkHistoryComponent implements OnInit {
  education: any[] = PersonalInfo.education;
  work_history: any[] = PersonalInfo.work_history;

  constructor() {}

  ngOnInit(): void {}
}
