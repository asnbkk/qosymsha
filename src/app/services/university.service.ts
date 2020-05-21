import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { api } from '../../assets/data/env'

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  // private url = "assets/data/university.json"
  private url = api + 'univers/'

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<any> {
    return this.http.get(this.url)
  }
}
