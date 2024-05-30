import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-no-log',
  templateUrl: './home-no-log.component.html',
  styleUrls: ['./home-no-log.component.css']
})
export class HomeNoLogComponent {
  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

