import { Component, HostListener, Input, OnInit } from '@angular/core';
import { countryList } from 'src/app/constants';
import { IConfig, ICountry } from 'src/app/models';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  searchText = '';
  countryList: ICountry[] = [];
  preferredCountryList: ICountry[] = [];
  countriesExpectBlocked: ICountry[] = [];
  filteredCountries: ICountry[] = [];
  selectedCountry: ICountry = {};
  displayList = false;
  @Input() preferredCountryCodes: string[] = [];
  @Input() blockedCountryCodes: string[] = [];
  @Input() allowedCountryCodes: string[] = [];
  @Input() selectedCountryConfig:IConfig = {}
  @Input() countryListConfig:IConfig = {}
  
  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.countryList = this.service.getAllAllowedCountries(this.allowedCountryCodes);
    this.countriesExpectBlocked = this.service.getFilteredCountries(
      this.countryList,
      this.blockedCountryCodes
    );
    this.preferredCountryList = this.service.setPreferredCountries(
      this.countriesExpectBlocked,
      this.preferredCountryCodes
    );
    this.filteredCountries = this.service.getStandardCountries();
  }

  changeCountry(country: ICountry) {
    this.selectedCountry = country;
    this.displayList = false;
  }

  toggleList() {
    this.displayList = !this.displayList;
  }
  search() {
    this.preferredCountryList = this.service.getCountriesBasedOnSearch(
      this.service.getPreferredCountries(),
      this.searchText
    );
    this.filteredCountries = this.service.getCountriesBasedOnSearch(
      this.service.getStandardCountries(),
      this.searchText
    );
  }

  @HostListener('document:click', ['$event']) 
  onDocumentClick(event:any) {    
    this.displayList = false;
  }
}
