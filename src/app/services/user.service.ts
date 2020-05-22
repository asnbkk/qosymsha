import { Injectable } from '@angular/core';
import { api } from '../../assets/data/env'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = api + "user/"
  private headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }
  onRegsiter(user):Observable<any> {
    return this.http.post(this.url + 'signup/', {user: user}, this.headers)
  }
}
