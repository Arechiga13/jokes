import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { DataService } from './data.service';
import { PwaService } from './pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jokes';
  joke: any;

  constructor(updates: SwUpdate, private data: DataService, public Pwa: PwaService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    });
  }

}
