import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


@Input()
  isLoggedIn: boolean = true;

  constructor() { }

  ngOnInit() {
        console.log(this.isLoggedIn);
  }


}
