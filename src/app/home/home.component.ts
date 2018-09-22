import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public somedata = "";
	public todaydate;
	public clickcounter = 0;
  constructor() { 
	this.todaydate = new Date();
  }
	
  ngOnInit() {
  }
  getsomedata(){
	this.somedata = "This is sample comp data";
	this.clickcounter+=1;
  }

}