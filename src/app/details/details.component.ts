import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute } from "@angular/router"
import { HousingService } from "../service/housing.service"
import { HousingLocation } from "../housing-location/housing-location"
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms"

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: ` <article>
    <img [src]="housingLocation?.photo" alt="" class="listing-photo" />

    <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">
        {{ housingLocation?.city }}, {{ housingLocation?.state }}
      </p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Unit available: {{ housingLocation?.availableUnits }}</li>
        <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
        <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
      </ul>
    </section>
    <section class="listing-apply" (submit)="submitApplication()">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" formControlName="firstName" />

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" formControlName="lastName" />

        <label for="email">Email</label>
        <input type="text" id="email" formControlName="email" />

        <button type="submit" class="primary">Apply Now</button>
      </form>
    </section>
  </article>`,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService: HousingService = inject(HousingService)
  housingLocation: HousingLocation | undefined
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  })

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.housingService
      .getHousingLocationById(id)
      .then((housingLocation: HousingLocation | undefined) => {
        this.housingLocation = housingLocation
      })
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    )
  }
}
