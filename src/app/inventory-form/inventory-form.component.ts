import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRODUCTS } from '../mockdata/mock-products'; 
import { InventorItem } from '../models/inventory-item';

@Component({
  selector: '[app-inventory-form]',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {
  products = PRODUCTS;
  @Input() item?: InventorItem;
  @Output() itemChange = new EventEmitter<InventorItem>;

  @Input() updatedItem = new InventorItem(this.products[0], 0, 0, undefined); // default
  @Output() updatedItemChange = new EventEmitter<InventorItem>;

  @Output() alertUpdate = new EventEmitter<String>;
  makeUpdateAlert() {
    this.alertUpdate.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

  deselectItem() {
    this.item = undefined;
    this.itemChange.emit(this.item);
  }

}
