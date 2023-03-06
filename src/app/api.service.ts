import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Students } from './Students';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/students";

  getStudents()
  {
    return this.http.get<Students[]>(this.url);
  }

}
