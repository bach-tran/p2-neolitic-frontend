import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable(
{providedIn: 'root'}
)
export class AuthenticationService {
    
    private currentUser: User;
    
    constructor(private http: HttpClient, private router: Router) { }
    
    public async login(username: string, password: string): Promise<User> {
        const response: Promise<User> = this.http.post<User>(environment.API_URL + ':' + environment.PORT + '/neolitic/user/login', {
            username: username,
            password: password
        }, {
            withCredentials: true
        }).toPromise();

        this.setUser(await response);

        return response;
    }
    
    public async logout(): Promise<void> {
    const response: Promise<void> = this.http.get<void>(environment.API_URL + ':' + environment.PORT + '/neolitic/user/logout',
    {
        withCredentials: true
    }).toPromise();

        return response;
    }

    public async checkAuthorization(): Promise<boolean> {
        try {
            const response = await this.http.get<User>(environment.API_URL + ':' + environment.PORT + '/neolitic/user/current', {
            withCredentials: true
            }).toPromise();

            this.setUser(response);

            return true;
        } catch (error) {
            return false;
        }
    }

    public setUser(user: User): void {
        this.currentUser = user;
    }

    public getUser(): User {
        return this.currentUser;
    }
}