import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/models/item';
import { Shop } from 'src/models/shop';
import { ShopService } from 'src/services/shop.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent implements OnInit {
  @Input() shop: Shop;
  shopItems: Item[];

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService
  ) {}

  ngOnInit(): void {
    this.getShop();
    this.getShopItems();
  }

  getShop(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shopService.getShop(id).subscribe((shop) => (this.shop = shop));
  }

  getShopItems(): void {
    this.shopService
      .getShopItems(this.shop)
      .subscribe((items) => (this.shopItems = items));
  }
}
