import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SHOPS } from 'src/data/shops-initializer';
import { Shop } from 'src/models/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}

  getShop(id: number): Observable<Shop> {
    return of(SHOPS.find((shop) => shop.id === id));
  }

  getShops(): Observable<Shop[]> {
    return of(SHOPS);
  }
}
