import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable(
{providedIn: 'root'}
)
export class LogoutService {
    
    private currentUser: User;
    
    constructor(private http: HttpClient, private router: Router) { }
    
    public async logout(): Promise<void> {
        await this.http.get(environment.API_URL + ':' + environment.PORT + '/neolitic/user/logout', {
            withCredentials: true
        }).toPromise();

        this.currentUser = null;
    }
    
    public setUser(user: User): void {
        this.currentUser = null;
    }

    public getUser(): User {
        return this.currentUser;
    }
}