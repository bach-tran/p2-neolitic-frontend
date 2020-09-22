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
    private modals: any[] = [];
    async createNewPost(): Promise <void>
    {
        console.log("Sanity Test");
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}

