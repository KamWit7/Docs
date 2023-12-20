import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute } from "@angular/router"
import { HousingService } from "../housing.service"
import { HousingLocation } from "../housing-location"

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: ` <article>
    <img [src]="housingLocation?.photo" alt="" className="listing-photo" />

    <section className="listing-description">
      <h2 className="listing-heading">{{ housingLocation?.name }}</h2>
      <p className="listing-location">
        {{ housingLocation?.city }}, {{ housingLocation?.state }}
      </p>
    </section>
    <section className="listing-features">
      <h2 className="section-heading">About this housing location</h2>
      <ul>
        <li>Unit available: {{ housingLocation?.availableUnits }}</li>
        <li>Does this location have wifi {{ housingLocation?.wifi }}</li>
        <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
      </ul>
    </section>
    <section className="listing-apply">
      <h2 className="section-heading">Apply now to live here</h2>
      <button type="button" className="primary">Apply now</button>
    </section>
  </article>`,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService: HousingService = inject(HousingService)
  housingLocation: HousingLocation | undefined

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.housingLocation = this.housingService.getHousingLocationById(id)
  }
}
