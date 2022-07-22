export class Brand {
    id: number;
    name: string;

    constructor(id = 0, name = 'unknown') {
        this.name = name;
        this.id = id;
    }
}