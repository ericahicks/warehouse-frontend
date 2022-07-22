import { Brand } from '../models/brand';
import { Category } from '../models/category';
import { Product } from '../models/product'
import { InventorItem } from '../models/inventory-item';
import { BRANDS } from '../mockdata/mock-brand'
import { CATEGORIES } from '../mockdata/mock-category'
import { PRODUCTS } from './mock-products';
import { Warehouse } from '../models/warehouse';
import { WAREHOUSES } from './mock-warehouses';

export const INVENTORY: InventorItem[] = [
    {
        
        product: PRODUCTS[0],
        quantity: 10,
        minimum: 2,
        warehouse: WAREHOUSES[0]
    },
    {
        product: PRODUCTS[1],
        quantity: 1,
        minimum: 0,
        warehouse: WAREHOUSES[0]
    }
];