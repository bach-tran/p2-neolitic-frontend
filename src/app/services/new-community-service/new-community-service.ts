import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Community } from 'src/app/models/community';
import { Router } from '@angular/router';


@Injectable(
    {providedIn: 'root'}
    )


export class NewCommunityService {

    constructor(private http: HttpClient, private router: Router) { } ;
    createNewCommunity(name: string, description: string) :Promise<Community>
    {
        const response = this.http.post<Community>(environment.API_URL + ':' + environment.PORT + '/neolitic/community', {
            name,
            description
          },
          {
            withCredentials: true
          }).toPromise();

          this.router.navigateByUrl("/consumer-home");
          return response;
    }
    
    
}
