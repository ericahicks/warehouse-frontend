import { State } from "../models/state";
import { Warehouse } from "../models/warehouse";


export const WAREHOUSES: Warehouse[] = [
    {
        
    id: 1,
    name: 'Her House',
    capacity: 50,
    street: '123 First St',
    city: 'Malvern',
    state: new State('Pennsylvania', 'PA'),
    zip: '19355'

    }
];