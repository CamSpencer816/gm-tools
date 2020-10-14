import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CITIES } from 'src/data/cities-initializer';
import { City } from 'src/models/city';
import { Shop } from 'src/models/shop';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private shopService: ShopService) {}

  getCity(id: number): Observable<City> {
    return of(CITIES.find((city) => city.id === id));
  }

  getCities(): Observable<City[]> {
    return of(CITIES);
  }

  getCityShops(city: City): Observable<Shop[]> {
    const cityShops: Shop[] = [];

    for (const shopId of city.shopIds) {
      this.shopService
        .getShop(shopId)
        .subscribe((shop) => cityShops.push(shop));
    }

    return of(cityShops);
  }
}
