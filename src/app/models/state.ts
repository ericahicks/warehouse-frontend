export class State {
    name: string;
    abbreviation: string;

    constructor(name = 'Pennsylvania', abbreviation = 'PA') {
        this.name = name;
        this.abbreviation = abbreviation;
    }
}