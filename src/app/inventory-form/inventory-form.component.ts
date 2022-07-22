import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRODUCTS } from '../mockdata/mock-products'; 
import { InventorItem } from '../models/inventory-item';

@Component({
  selector: '[app-inventory-form]',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {

  @Input() item?: InventorItem;
  @Output() itemChange = new EventEmitter<InventorItem>;

  @Input() updateItem?: InventorItem;
  @Output() updateItemChange = new EventEmitter<InventorItem>;

  @Output() updateAlert = new EventEmitter<String>;
  makeAlert() {
    this.updateAlert.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

  deselectItem() {
    this.item = undefined;
    this.itemChange.emit(this.item);
  }

  dontUpdateItem() {
    this.updateItem = undefined;
    this.updateItemChange.emit(this.updateItem);
  }

}
