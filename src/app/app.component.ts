import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menuOption = false;
  public loading = true;

  constructor() {}

  ngOnInit() {
    this.loading = false;
  }

}
