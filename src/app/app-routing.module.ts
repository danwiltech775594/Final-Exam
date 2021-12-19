import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonNavigatorComponent } from './person-navigator/person-navigator.component';


const routes: Routes = [
  {path:'person', component:PersonNavigatorComponent}
];

export const routing=RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
