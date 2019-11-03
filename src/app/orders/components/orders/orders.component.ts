import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'dateBirth', 'address', 'city', 'file', 'productId'];
  dataSource: MatTableDataSource<Order[]>;
  ordersFiled$: Observable<Order[]>;
  constructor(
    private ordersService: OrdersService
  ) {
    this.ordersFiled$ = this.ordersService.ordersFiled$;

  }

  ngOnInit() {
    this.ordersFiled$.subscribe((orders: Order[]) => {
      this.dataSource = new MatTableDataSource(orders as any);
      this.dataSource.filterPredicate = (data: any, filter: string): boolean => {
        return data.id === +filter;
      };
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
