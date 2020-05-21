import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from '../../assets/data/env'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private url = api + "tutors/"
  private headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }
  getByCourse(name): Observable<any[]> {
    return this.http.post<any[]>(this.url + "course/", {name: name}, this.headers)
  } 
}
