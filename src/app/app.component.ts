/*
* File: app.component.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-03-07
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Students } from './Students';
import { Scores } from './Scores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Students';

  constructor(private api : ApiService){}

  columns = ["Student ID", "Name", "Gender", "Group", "Scores"];

  index = ["id", "name", "gender", "group", "score"] as const;

  students : Students[] = [];

  scores: Scores[] = [];


  ngOnInit(): void {
    this.api.getStudents().subscribe(
      (studentsResponse) => {
        this.students = studentsResponse;
        this.api.getScores().subscribe(
          (scoresResponse) => {
            this.scores = scoresResponse;
            // Combine students and scores arrays based on the student ID
            this.students.forEach((student) => {
              const score = this.scores.find((s) => s.studentId === student.id);
              student.score = score ? score.score : '';
            });
          },
          (error) => {
            console.log('Error Occured while fetching scores: ' + error);
          }
        );
      },
      (error) => {
        console.log('Error Occured while fetching students: ' + error);
      }
    );
  }
}
