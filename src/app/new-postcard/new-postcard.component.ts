import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewPostcardService } from '../services/new-postcard-service/new-postcard-service';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-new-postcard',
  templateUrl: './new-postcard.component.html',
  styleUrls: ['./new-postcard.component.css']
})
export class NewPostcardComponent implements OnInit {
  @Input()
  communityId : string
  private newPostcardService: NewPostcardService;

  @Output() updatePosts: EventEmitter<void> = new EventEmitter();

  selectedFile = null;
  caption = null;
  constructor( newPostcardService: NewPostcardService, private http: HttpClient ) {
    this.newPostcardService = newPostcardService;
  }

  ngOnInit(): void {
  }

  onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
  }

  public async create(): Promise<void>
  {
    const fd = new FormData();
    console.log(this.caption);
    fd.append('file', this.selectedFile);
    fd.append('communityId', this.communityId)
    fd.append('caption', this.caption)

    await this.newPostcardService.createNewPost(fd);

    this.updatePosts.emit();
  }
}
