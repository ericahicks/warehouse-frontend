import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mockdata/mock-products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
