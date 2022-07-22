import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventorItem } from '../models/inventory-item';
import { InventoryApiService } from '../inventory-api.service';
import { PRODUCTS } from '../mockdata/mock-products';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  items: InventorItem[] = [];

  @Input() selectedItem?: InventorItem;
  @Output() selectItemChange = new EventEmitter<InventorItem>;
  
  @Input() deletingItem?: InventorItem;
  @Output() deletingItemChange = new EventEmitter<InventorItem>;

  @Input() updatingItem?: InventorItem;
  @Output() updatingItemChange = new EventEmitter<InventorItem>;

  newItem?: InventorItem;
  addItem(newItem: InventorItem) {
    this.newItem = newItem;
    this.items.push(newItem);
    this.inventoryService.save(newItem);
    this.newItem = undefined;
  }

  openAddForm = false;
  toggleOpenAddForm() {
    this.openAddForm = !this.openAddForm;
  }


  constructor(private inventoryService: InventoryApiService) {  
    this.inventoryService = inventoryService;
   }

  ngOnInit(): void {
    this.getInventory();
  }

  onSelect(item: InventorItem) {
    this.selectedItem = item;
    this.selectItemChange.emit(this.selectedItem);
  }

  selectForDelete(item: InventorItem) {
      this.deletingItem = item;
      this.deletingItemChange.emit(this.selectedItem);
  }

  selectForUpdate(item: InventorItem) {
    this.updatingItem = item;
    this.updatingItemChange.emit(this.updatingItem);
  }

  doDelete(): void {
    this.inventoryService.delete(this.deletingItem)
        .subscribe();
    // update the table on the screen
    this.items = this.items.filter(item => item !== this.deletingItem)
  }

  doUpdate(): void {
    this.inventoryService.update(this.updatingItem).subscribe();
    // update table
    this.items = this.items.map(item => {if (item == this.updatingItem) return this.updatingItem; else return item;})
  }

  getInventory(): void {
    this.inventoryService.findAll()
        .subscribe(inventory => {this.items = inventory; console.log(inventory)});
  }

}
