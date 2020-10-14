import { Component, OnInit } from '@angular/core';
import { City } from 'src/models/city';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities().subscribe((cities) => (this.cities = cities));
  }
}
