import { Component } from '@angular/core';
import { IConfig } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'country-list';
  preferredCountryCodes: string[] = ['us', 'in'];
  blockedCountryCodes: string[] = [];
  selectedCountryConfig: IConfig = {};
  countryListConfig: IConfig = {};
  allowedCountryCodes: string[] = []
}
