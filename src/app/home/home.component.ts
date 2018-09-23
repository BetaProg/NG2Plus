import { Component, OnInit } from '@angular/core';
import { CountitService } from '../countit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CountitService]
})
export class HomeComponent implements OnInit {

	public somedata = "";
	public todaydate;
	public clickcounter = 0;
	public globalcount;
  constructor(private _ser:CountitService) {
	this.todaydate = new Date();
	this.globalcount = this._ser.raiseglobalCount();
  }
	
  ngOnInit() {
  }
  getsomedata(){
	this.somedata = "This is sample comp data";
	this.clickcounter+=1;
	// this._ser.globalcount = this._ser.raiseglobalCount();
	// this._ser.globalcount = 5;
  }

}