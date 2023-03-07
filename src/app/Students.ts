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