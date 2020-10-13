import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SHOPS } from 'src/data/shops-initializer';
import { Item } from 'src/models/item';
import { Shop } from 'src/models/shop';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private itemService: ItemService) {}

  getShop(id: number): Observable<Shop> {
    return of(SHOPS.find((shop) => shop.id === id));
  }

  getShops(): Observable<Shop[]> {
    return of(SHOPS);
  }

  getShopItems(shop: Shop): Observable<Item[]> {
    const shopItems: Item[] = [];

    for (let itemId of shop.itemIds) {
      this.itemService
        .getItem(itemId)
        .subscribe((item) => shopItems.push(item));
    }

    return of(shopItems);
  }
}
