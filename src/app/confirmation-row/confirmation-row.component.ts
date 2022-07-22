import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InventorItem } from '../models/inventory-item';
import { InventoryApiService } from '../inventory-api.service';

@Component({
  selector: '[app-confirmation-row]',
  templateUrl: './confirmation-row.component.html',
  styleUrls: ['./confirmation-row.component.css']
})
export class ConfirmationRowComponent implements OnInit {

  @Input() item?: InventorItem;
  @Output() itemChange = new EventEmitter<InventorItem>;

  @Output() deleteAlert: EventEmitter<string> = new EventEmitter();
    makeAlert(){
         this.deleteAlert.emit();
    }

  constructor(private inventoryService: InventoryApiService) { }

  ngOnInit(): void {
  }

  deselectItem() {
    this.item = undefined;
    this.itemChange.emit(this.item);
  }

}
