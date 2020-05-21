import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private url = "assets/data/university.json"
  constructor(private http: HttpClient) { }

  getUniversities(): Observable<any> {
    return this.http.get(this.url)
  }
}
