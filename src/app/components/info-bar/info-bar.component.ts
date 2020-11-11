import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styles: [
  ]
})
export class InfoBarComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
