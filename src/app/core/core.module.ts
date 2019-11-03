import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';
import { OrdersService } from './services/orders/orders.service';
import { LocalStorageService } from './services/localStorage/local-storage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    OrdersService,
    LocalStorageService
  ]
})
export class CoreModule { }
