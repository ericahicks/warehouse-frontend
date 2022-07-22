import { Brand } from "./brand";
import { Category } from "./category";

export class Product {
    id: number;
    name: string;
    description: string;
    category: Category;
    brand: Brand;
    size: string;
    imageurl: string;

    constructor(id = 0, name = 'nothing', description = 'No description available', 
                category = new Category(), brand = new Brand(), size = '', imageurl = '') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.brand = brand;
        this.size = size;
        this.imageurl = imageurl;            
    }
}