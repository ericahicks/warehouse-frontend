import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ProductListComponent } from './product-list/product-list.component';
import { CardModule } from 'primeng/card';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { WarehousePanelComponent } from './warehouse-panel/warehouse-panel.component';
import { ProductPanelComponent } from './product-panel/product-panel.component';
import { InventoryPanelComponent } from './inventory-panel/inventory-panel.component';
import { AlertsComponent } from './alerts/alerts.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { ConfirmationRowComponent } from './confirmation-row/confirmation-row.component';
import { InventoryAddFormComponent } from './inventory-add-form/inventory-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    ProductListComponent,
    HeaderBarComponent,
    WarehousePanelComponent,
    ProductPanelComponent,
    InventoryPanelComponent,
    AlertsComponent,
    InventoryFormComponent,
    ConfirmationRowComponent,
    InventoryAddFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule, 
    InputTextModule, 
    TableModule,
    CheckboxModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
