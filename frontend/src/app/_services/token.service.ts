import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../_interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token',token);
    this.router.navigate(['admin'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }

  logOut(): void{
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  getToken(): string|null{
    return localStorage.getItem('token')
  }

  clearToken(): void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  clearTokenExpired(): void{
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
  }
}
