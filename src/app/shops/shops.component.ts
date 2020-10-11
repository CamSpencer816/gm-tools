import { Component, OnInit } from '@angular/core';
import { SHOPS } from 'src/data/shops-initializer';
import { Shop } from 'src/models/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent implements OnInit {
  shop: Shop = {
    id: 1,
    name: 'Default Shop',
  };

  shops: Shop[] = SHOPS;
  selectedShop: Shop;

  constructor() {}

  ngOnInit(): void {}

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
  }
}
