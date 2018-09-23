import { Component } from '@angular/core';
import { CountitService } from './countit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountitService]
})
export class AppComponent {
  title = 'Ripoff';
}

