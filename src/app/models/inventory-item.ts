import { Product } from "./product";
import { Warehouse } from "./warehouse";

export class InventorItem {
    product: Product;
    quantity: number;
    minimum: number;
    warehouse: Warehouse | undefined;

    constructor(product: Product, quantity = 0, minimum = 0, warehouse?: Warehouse) {
        this.product = product;
        this.quantity = quantity;
        this.minimum = minimum;
        this.warehouse = warehouse;
    }

}