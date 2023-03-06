export class Students 
{
    id : number;
    name : string;
    gender : string;
    group : string;

    constructor(id: number, name: string, gender: string, group: string)
    {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.group = group;
    }
}