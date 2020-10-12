import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shop } from 'src/models/shop';
import { ShopService } from 'src/services/shop.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent implements OnInit {
  @Input() shop: Shop;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getShop();
  }

  getShop(): void {
    // TODO - Make Number conversion a bit more transparent
    const id = +this.route.snapshot.paramMap.get('id');
    this.shopService.getShop(id).subscribe((shop) => (this.shop = shop));
  }

  goBack(): void {
    this.location.back();
  }
}
