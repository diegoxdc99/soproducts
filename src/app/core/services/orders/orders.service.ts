import { Injectable } from '@angular/core';
import { Order } from '../../models/order.model';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [];
  private ordersFiled = new BehaviorSubject<Order[]>([]);
  ordersFiled$ = this.ordersFiled.asObservable();

  constructor(
    private localStorageService: LocalStorageService
  ) {
    const orders = localStorageService.getOrders();
    this.orders = orders ? orders : [];
    this.updateOrdersFiled();
  }

  addOrder(order: Order) {
    order.id = this.generateId();
    this.orders = [...this.orders, order];
    this.localStorageService.storeOrder(this.orders);
    this.updateOrdersFiled();
  }

  generateId() {
    return this.orders.length;
  }

  updateOrdersFiled() {
    this.ordersFiled.next(this.orders);
  }
}
