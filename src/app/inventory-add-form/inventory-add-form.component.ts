import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brand } from '../models/brand';
import { Category } from '../models/category';
import { InventorItem } from '../models/inventory-item';
import { Product } from '../models/product';
import { State } from '../models/state';
import { Warehouse } from '../models/warehouse';

@Component({
  selector: '[app-inventory-add-form]',
  templateUrl: './inventory-add-form.component.html',
  styleUrls: ['./inventory-add-form.component.css']
})
export class InventoryAddFormComponent implements OnInit {

  newname?: string;
  newdesc?: string;
  newqty?: number;

  size: string;
  brand: Brand;
  category: Category;
  imageURL: string;

  
  constructor() { 
    this.size = "unknown";
    this.brand = new Brand(6, "generic");
    this.category = new Category(5, "miscellaneous");
    this.imageURL = "./assets/img/notfound.png";
  }

  ngOnInit(): void {
    
  }


  
  @Output() isopen= new EventEmitter<string>;
  closeAddForm() {
    this.isopen.emit();
  }

  @Input() openAddForm = false;
  @Output() openAddFormChange = new EventEmitter<boolean>;
  alertOpenAddForm() {
    this.openAddForm = !this.openAddForm;
    this.openAddFormChange.emit(this.openAddForm);
  }

  @Output() newItemEvent = new EventEmitter<InventorItem>();

  addNewItem() {
    let prod = new Product(undefined, this.newname, this.newdesc, this.category, this.brand, this.size, this.imageURL);
    let ware = new Warehouse(1, "My Warehouse", 100, "123 Main St", "Malvern", new State("Pennsylvania", "PA"), "19355");
    let value = new InventorItem(prod, this.newqty, 0, ware);
    this.newItemEvent.emit(value);
  }

  


}
