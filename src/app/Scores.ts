/*
* File: Scores.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-03-07
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

export class Scores 
{
    id : number;
    score : number;
    studentId : number;

    constructor(id: number, score : number, studentId : number)
    {
        this.id = id;
        this.score = score;
        this.studentId = studentId;
    }
}