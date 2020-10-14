import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent },
  { path: 'city-details/:id', component: CityDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop-details/:id', component: ShopDetailsComponent },
  { path: 'shops', component: ShopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
