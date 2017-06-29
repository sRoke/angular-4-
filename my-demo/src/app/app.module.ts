import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { HeroListComponent } from './hero-list.component';
import { CrisisListComponent } from './crisis-list.component';
import { app1 } from './js/app1';
import { app2 } from './js/app2';



const appRoutes: Routes = [
  { path: 'Crisis', component: CrisisListComponent },
  { path: 'app1',      component: app1 },
  { path: 'app2',      component: app2 },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    app1,
    app2,
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
