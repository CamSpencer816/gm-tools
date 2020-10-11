import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/models/shop';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent implements OnInit {
  @Input() shop: Shop;

  constructor() {}

  ngOnInit(): void {}
}
