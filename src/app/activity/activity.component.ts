import { Component, OnInit } from '@angular/core';
import { CountitService } from '../countit.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [CountitService]
})
export class ActivityComponent implements OnInit {
	public globalcount;
  constructor(private _ser:CountitService) {
	this.globalcount = this._ser.raiseglobalCount();
  }

  ngOnInit() {
  }

}
