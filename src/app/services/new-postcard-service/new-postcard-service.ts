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
    async createNewPost(): Promise <void>
    {
        this.content
        console.log("Sanity Test");
    }
}

