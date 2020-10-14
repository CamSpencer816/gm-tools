import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITEMS } from 'src/data/items-initializer';
import { Item } from 'src/models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getItem(id: number): Observable<Item> {
    return of(ITEMS.find((item) => item.id === id));
  }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }
}
