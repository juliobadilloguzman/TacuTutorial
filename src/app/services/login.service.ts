import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'https://reqres.in/';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
    return this.http.post<any>(`${this.API_URL}api/login`, user);
  }

}
