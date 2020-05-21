import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../../assets/data/env'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // private url = "assets/data/faculty.json"
  private headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private url = api + "courses/"
  constructor(private http: HttpClient) { }

  getCourses(name): Observable<any> {
    return this.http.post(this.url + 'faculty/', { name: name }, this.headers)
  }
}
