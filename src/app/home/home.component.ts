import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HousingLocationComponent } from "../housing-location/housing-location.component"
import { HousingLocation } from "../housing-location/housing-location"
import { HousingService } from "../service/housing.service"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #search />
        <button
          type="button"
          class="primary"
          (click)="filterResults(search.value)"
        >
          Search
        </button>
      </form>
      <section class="results">
        <app-housing-location
          *ngFor="let housingLocation of filteredHousingLocationList"
          [housingLocation]="housingLocation"
        />
      </section>
    </section>
  `,
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredHousingLocationList: HousingLocation[] = []

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList
        this.filteredHousingLocationList = housingLocationList
      })
  }

  filterResults(text: string) {
    console.log(text, this.housingLocationList)
    if (!text) this.filteredHousingLocationList = this.housingLocationList

    this.filteredHousingLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.name?.toLowerCase().includes(text.toLowerCase())
    )
  }
}
