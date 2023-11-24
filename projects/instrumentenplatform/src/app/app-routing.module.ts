import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country/country.page.component';
import { WeatherPageComponent } from './pages/weather/weather.page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'country',
    component: CountryPageComponent
  },
  {
    path: 'weather',
    component: WeatherPageComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
