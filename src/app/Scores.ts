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