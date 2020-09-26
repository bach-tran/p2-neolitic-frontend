import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostcardComponent } from './postcard/postcard.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { ModalComponent } from './modal/modal.component';
import { NewPostcardComponent} from './new-postcard/new-postcard.component';
import { CommunityCardComponent } from './community-card/community-card.component';
import { AdminNavComponent } from './navbar/admin-nav/admin-nav.component';
import { ConsumerNavComponent } from './navbar/consumer-nav/consumer-nav.component';
import { UnauthedNavComponent } from './navbar/unauthed-nav/unauthed-nav.component';
import { CommunityNavComponent } from './navbar/community-nav/community-nav.component';
import { NewCommunityComponent } from './new-community/new-community.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    PostcardComponent,
    RegistrationPageComponent,
    ConsumerHomeComponent,
    LoginPageComponent,
    CommunityPageComponent,
    ModalComponent,
    NewPostcardComponent,
    CommunityCardComponent,
    AdminNavComponent,
    ConsumerNavComponent,
    UnauthedNavComponent,
    CommunityNavComponent,
    NewCommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
