import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HousingLocationComponent } from "../housing-location/housing-location.component"
import { HousingLocation } from "../housing-location"
import { HousingService } from "../housing.service"

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
          className="primary"
          (click)="filterResults(search.value)"
        >
          Search
        </button>
      </form>
      <section className="results">
        <app-housing-location
          *ngFor="let housingLocation of filteredHousingLocationList"
          [housingLocation]="housingLocation"
        ></app-housing-location>
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
