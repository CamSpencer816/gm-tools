import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/models/shop';
import { MessageService } from 'src/services/message.service';
import { ShopService } from 'src/services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent implements OnInit {
  shops: Shop[];
  selectedShop: Shop;

  constructor(
    private shopService: ShopService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getShops();
  }

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
    this.messageService.add(`ShopsComponent: Selected Shop ID=${shop.id}`);
  }

  getShops(): void {
    this.shopService.getShops().subscribe((shops) => (this.shops = shops));
  }
}
