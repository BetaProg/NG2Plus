import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountitService {

  constructor() { }
  // public globalcount = 0;
  // globalcount:number = 10;
  // raiseglobalCount(): number{
  raiseglobalCount(): void{
	  // return this.globalcount+1;
  }
}
