import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonNavigatorComponent } from './person-navigator/person-navigator.component';
import { PersonService } from './Services/PersonService';
import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonNavigatorComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
