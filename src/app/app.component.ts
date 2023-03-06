import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Students } from './Students';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Students';

  constructor(private api : ApiService){}

  columns = ["Student ID", "Name", "Gender", "Group"];

  index = ["id", "name", "gender", "group"] as const;

  students : Students[] = [];

  ngOnInit(): void {
    this.api.getStudents().subscribe
    (
      (response)=>
      {
        this.students = response;
      },
      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }
}
