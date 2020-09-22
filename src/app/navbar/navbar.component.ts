import { Component, OnInit } from '@angular/core';
import { LogoutService } from "../services/logout-service/logout-service";
import {NewPostcardService } from "../services/new-postcard-service/new-postcard-service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private logoutService: LogoutService;
  private newPostcardService: NewPostcardService;

  constructor( logoutService: LogoutService, newPostcardService: NewPostcardService ) { 
    this.logoutService = logoutService;
    this.newPostcardService = newPostcardService;
  }

  ngOnInit(): void {
  }

  public async create(): Promise<void>
  {
    this.newPostcardService.createNewPost();
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
  }
}
