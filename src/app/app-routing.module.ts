import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: 'register', component: RegistrationPageComponent },
  // { path: 'login', component: LoginPageComponent },
  { path: 'consumer-home', component: RegistrationPageComponent },
  { path: 'admin-home', component: RegistrationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
