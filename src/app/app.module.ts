import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from "./app.component";
import { TodoappsComponent } from './components/todoapps/todoapps.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AboutComponent} from "./components/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoappsComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'todoapps', component: TodoappsComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
