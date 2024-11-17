import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button
      (click)="filterResults(filter.value)"
      class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
      <app-housing-location
       *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
       ></app-housing-location>
    </section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(city: string) {
    if (!city) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (location) => location.city.toLowerCase().includes(city.toLowerCase())
    );
  }
}
