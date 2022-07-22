import { Injectable } from '@angular/core';
import { PRODUCTS } from './mockdata/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  products = PRODUCTS;

  constructor() { }
}
