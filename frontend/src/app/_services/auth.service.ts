import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../_interfaces/credentials';
import { Token } from '../_interfaces/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8093/api/auth/signin"

  constructor(private http: HttpClient) { }

  login(credentials : Credentials): Observable<Token>{
    return this.http.post<Token>(this.url,credentials);
  }
}
