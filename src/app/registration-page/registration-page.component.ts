import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async registerNew(): Promise<void> {
    try {
      // implement http auth service
    } catch (error) {
      alert("Oh no, we had a problem logging in. Please try again.");
      console.log(error);
    }
  }
}
