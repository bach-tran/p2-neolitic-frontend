import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommunityPageComponent } from './community-page/community-page.component'
import { HomePageComponent } from './home-page/home-page.component';
import { NewPostcardComponent } from './new-postcard/new-postcard.component';
import { NewCommunityComponent } from './new-community/new-community.component';

const routes: Routes = [
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'consumer-home', component: ConsumerHomeComponent },
  { path: 'community-page/:communityId', component: CommunityPageComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'new-postcard', component: NewPostcardComponent},
  { path: 'new-society', component: NewCommunityComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
