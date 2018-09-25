import { Component } from '@angular/core';
import { CountitService } from './countit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountitService]
})
export class AppComponent {
  title = 'Ripoff';
  private router: Router;
  constructor(router: Router){
	   this.router = router;
	  console.log(router.url);
  }
}

