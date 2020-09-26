import { Component, OnInit } from '@angular/core';
import { NewCommunityService } from '../services/new-community-service/new-community-service'
@Component({
  selector: 'app-new-community',
  templateUrl: './new-community.component.html',
  styleUrls: ['./new-community.component.css']
})
export class NewCommunityComponent implements OnInit {
  private newCommunityService: NewCommunityService;
  name =null;
  description = null;
  constructor(newCommunityService: NewCommunityService) { 
    this.newCommunityService = newCommunityService;
  }

  ngOnInit(): void {
  }

  public async registerNew(): Promise<void>
  {
    await this.newCommunityService.createNewCommunity(this.name, this.description);

  }
}
