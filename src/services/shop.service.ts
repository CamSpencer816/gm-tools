import { Injectable } from '@angular/core';
import { SHOPS } from 'src/data/shops-initializer';
import { Shop } from 'src/models/shop';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}

  getShops(): Observable<Shop[]> {
    return of(SHOPS);
  }
}
