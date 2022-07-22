import { Component, EventEmitter, OnInit } from '@angular/core';
import { InventorItem } from '../models/inventory-item';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.css']
})
export class InventoryPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
