import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/models/city';
import { Shop } from 'src/models/shop';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent implements OnInit {
  @Input() city: City;
  cityShops: Shop[];

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.getCity();
    this.getCityShops();
  }

  getCity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getCity(id).subscribe((city) => (this.city = city));
  }

  getCityShops(): void {
    this.cityService
      .getCityShops(this.city)
      .subscribe((shops) => (this.cityShops = shops));
  }
}
