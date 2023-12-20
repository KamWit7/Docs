import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HousingLocation } from "../housing-location"

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section className="listing">
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        className="listing-photo"
      />
      <h2 className="listing-heading">{{ housingLocation.name }}</h2>
      <p className="listing-description">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
