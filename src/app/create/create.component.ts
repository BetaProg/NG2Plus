import { Component, OnInit } from '@angular/core';
import {ElementRef, ViewChild, Renderer2, ContentChild } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
@ViewChild('emailId') emailId: ElementRef;
@ViewChild('selectVal') selectVal: ElementRef;
@ViewChild('formText') formText: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }
  
  saveFormData(){
	  console.log('clicked it');
	  
	  var emailAddress = this.emailId.nativeElement.value;
	  var selectValue = this.selectVal.nativeElement.value;
	  var formText = this.formText.nativeElement.value;
	  
	  console.log(emailAddress);
	  console.log(selectValue);
	  console.log(formText);
	  var arr1 = [];
	  arr1.push(emailAddress, selectValue, formText);
	  console.log(arr1);
	  sessionStorage.setItem('formArray', arr1);
  }

}
