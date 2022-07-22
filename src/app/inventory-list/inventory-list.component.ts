import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventorItem } from '../models/inventory-item';
import { InventoryApiService } from '../inventory-api.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  items: InventorItem[] = [];

  @Input() selectedItem?: InventorItem;
  @Output() selectItemChange = new EventEmitter<InventorItem>;

  stagedItem?: InventorItem;
  
  @Input() deletingItem?: InventorItem;
  @Output() deletingItemChange = new EventEmitter<InventorItem>;

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

  doDelete(): void {
    this.inventoryService.delete(this.deletingItem)
        .subscribe();
    // update the table on the screen
    this.items = this.items.filter(item => item !== this.deletingItem)
  }

  getInventory(): void {
    this.inventoryService.findAll()
        .subscribe(inventory => {this.items = inventory; console.log(inventory)});
  }

}
