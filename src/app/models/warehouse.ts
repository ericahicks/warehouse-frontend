import { VirtualTimeScheduler } from "rxjs";
import { State } from "./state";

export class Warehouse {
    id: number;
    name: string;
    capacity: number;
    street: string;
    city: string;
    state: State;
    zip: string;

    constructor(id = 0, name = 'Name unavailable', capacity = 0, street = '', city = 'Malvern',
                state = new State(), zip = '19355') {
                    this.id = id;
                    this.name = name;
                    this.capacity = capacity;
                    this.street = street;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                }
}