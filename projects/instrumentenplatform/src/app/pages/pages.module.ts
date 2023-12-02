import { NgModule } from "@angular/core";
import { CountryPageComponent } from "./country/country.page.component";
import { DashboardPageComponent } from "./dashboard/dashboard.page.component";
import { WeatherPageComponent } from "./weather/weather.page.component";
import { NotFoundPageComponent } from "./not-found/not-found.page.component";

@NgModule({
    imports: [
        CountryPageComponent,
        WeatherPageComponent,
        DashboardPageComponent,
        NotFoundPageComponent
    ],
})
export class PagesModule {}