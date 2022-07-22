import { Injectable } from '@angular/core';
import { InventorItem } from './models/inventory-item';
import { INVENTORY } from './mockdata/mock-inventory';
import { catchError, throwError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  http :HttpClient;
  baseUrl :string = environment.apiUrl + "inventory/";

  constructor(http :HttpClient) { // Angular calls this guy and gives the HttpClient object
    this.http = http;
  }

  findAll() :Observable<any> {
    return this.http.get(this.baseUrl + "warehouse/1");
  }

  getInventory(): Observable<InventorItem[]> {
    const inventory = of(INVENTORY);
    return inventory;
  }

  // rxjs 
  save(inventory :InventorItem) {                 // register an error handler
    return this.http.post(this.baseUrl, inventory).pipe(catchError(this.handleError));
  }

  delete(inventory? :InventorItem) {               // register an error handler
    if (inventory) {
      let deleteURL :string= this.baseUrl + 1 + "/" + inventory.product.id;
      return this.http.delete(deleteURL).pipe(catchError(this.handleError));
    } else {
      throw new Error("No inventory item provied to delete call."); // create a stacktrace
    }
  }

  private handleError(error :HttpErrorResponse) {
    // translate the HTTP error code into a Stacktrace
    console.log(error);
    return throwError(() => {
      throw new Error(); // create a stacktrace
    }); // return empty Observable
  }
}
