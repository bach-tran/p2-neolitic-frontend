import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommunityPageComponent } from './community-page/community-page.component'

const routes: Routes = [
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'consumer-home', component: ConsumerHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'community-page/:communityId', component: CommunityPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
