import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CountriesService } from '../../services/services';
import { Country } from '../../model/interfaces';
import { BaseModule } from '../../shared/base.module';

@Component({
  selector: 'app-country-page',
  templateUrl: './country.page.component.html',
  styleUrls: ['./country.page.component.scss'],
  standalone: true,
  imports: [BaseModule]
})
export class CountryPageComponent implements OnInit {
  mocksMode = environment.useMocks;
  countries: Country[] = [];

  constructor(
    private countryService: CountriesService
  ){}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

}