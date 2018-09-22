import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { GroupComponent } from './group/group.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'activity', component: ActivityComponent },
	{ path: 'group', component: GroupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
