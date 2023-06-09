import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { environment}from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Patient } from '../model/patient';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public host = environment.apiUrl;
  public token: any;
  private loggedInUsername: any;
  private jwtHelper= new JwtHelperService();



  constructor (private http: HttpClient) {}

  public login(user: User): Observable<HttpResponse<User> | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/login` , user, {observe: 'response'});
  }

  public register (user: User): Observable<User > {
    return this.http.post<User>
    (`${this.host}/user/register` , user);
  }

  public logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string): void {
    this.token=token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalCache(user: User| null): void {
    localStorage.setItem('user' ,JSON.stringify(user));
  }

  public addPatientToLocalCache(user: Patient| null): void {
    localStorage.setItem('patient' ,JSON.stringify(user));
  } 

  public getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user')||'');
  }
  public getPatientFromLocalCache(): Patient {
    return JSON.parse(localStorage.getItem('patient')||'');
  }
  public loadToken(): void{
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.token;
  }
  public isUserLoggedIn() : boolean{
    this.loadToken;
    if (this.token !=null && this.token!== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null ||''){
        if (!this.jwtHelper.isTokenExpired(this.token)){
          this.loggedInUsername=this.jwtHelper.decodeToken(this.token).sub ;
          return true ;
        }
      }
    } else {
      this.logOut ;
    }
    return false ;
  }
}






