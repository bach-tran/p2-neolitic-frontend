import { Component, OnInit } from '@angular/core';
import { NewPostcardService } from '../services/new-postcard-service/new-postcard-service';

@Component({
  selector: 'app-new-postcard',
  templateUrl: './new-postcard.component.html',
  styleUrls: ['./new-postcard.component.css']
})
export class NewPostcardComponent implements OnInit {
  private newPostcardService: NewPostcardService;
  constructor( newPostcardService: NewPostcardService ) { 
    this.newPostcardService = newPostcardService;
  }

  ngOnInit(): void {
  }

  public async create(): Promise<void>
  {
    this.newPostcardService.createNewPost();
  }
}
