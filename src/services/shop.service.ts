import { Injectable } from '@angular/core';
import { SHOPS } from 'src/data/shops-initializer';
import { Shop } from 'src/models/shop';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private messageService: MessageService) {}

  getShops(): Observable<Shop[]> {
    this.messageService.add('Geting Shops...');
    return of(SHOPS);
  }
}
