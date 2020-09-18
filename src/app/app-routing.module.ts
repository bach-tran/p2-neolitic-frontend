import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: 'neolitic/user/register', component: RegistrationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
