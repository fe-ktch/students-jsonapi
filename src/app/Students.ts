/*
* File: Students.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-03-07
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

export class Students 
{
    id : number;
    name : string;
    gender : string;
    group : string;
    score: number | string;

    constructor(id: number, name: string, gender: string, group: string, score: number)
    {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.group = group;
        this.score = score;
    }
}