import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Students } from './Students';
import { Scores } from './Scores';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000";

  getStudents()
  {
    return this.http.get<Students[]>(`${this.url}/students`);
  }
  getScores() {
    return this.http.get<Scores[]>(`${this.url}/scores`);
  }

}
