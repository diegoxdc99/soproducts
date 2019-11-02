import { Injectable } from '@angular/core';
import { Order } from '../../models/order.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [];
  private ordersFiled = new BehaviorSubject<Order[]>([]);
  private lastId = 0;
  ordersFiled$ = this.ordersFiled.asObservable();

  constructor() { }

  addOrder(order: Order) {
    order.id = this.generateId();
    this.orders = [...this.orders, order];
    this.ordersFiled.next(this.orders);
  }

  generateId() {
    return this.lastId++;
  }
}
