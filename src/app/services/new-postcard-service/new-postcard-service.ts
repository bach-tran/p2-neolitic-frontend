import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { User } from '../../models/user';


@Injectable(
{providedIn: 'root'}
)

export class NewPostcardService {
    @ViewChild('content') content: any;

    constructor( private http: HttpClient ){}
    async createNewPost(form : FormData): Promise <void>
    {
        this.http.post(environment.API_URL + ':' + environment.PORT + `/neolitic/post`, form, {withCredentials: true})
    .subscribe(res => {
      console.log(res);
      
    });
    }
}

