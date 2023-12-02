import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country/country.page.component';
import { WeatherPageComponent } from './pages/weather/weather.page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.page.component';

export const routes: Routes = [
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
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    pathMatch: 'full',  
    component: NotFoundPageComponent }, 
  
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
