import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HousingLocation } from "../housing-location"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section className="listing">
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        className="listing-photo"
        height="200px"
      />
      <h2 className="listing-heading">{{ housingLocation.name }}</h2>
      <p className="listing-description">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: "./housing-location.component.css",
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
