import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SHOPS } from 'src/data/shops-initializer';
import { Shop } from 'src/models/shop';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private messageService: MessageService) {}

  getShop(id: number): Observable<Shop> {
    this.messageService.add(`Shop Service: Geting Shop with ID [${id}]...`);
    return of(SHOPS.find((shop) => shop.id === id));
  }

  getShops(): Observable<Shop[]> {
    this.messageService.add('Shop Service: Geting Shops...');
    return of(SHOPS);
  }
}
