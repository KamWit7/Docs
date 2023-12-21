import { Injectable } from "@angular/core"
import { HousingLocation } from "../housing-location/housing-location"

@Injectable({
  providedIn: "root",
})
export class HousingService {
  readonly baseUrl = "http://localhost:3000/locations"
  readonly photoUrl = "https://angular.dev/assets/tutorials/common"
  protected housingLocationList: HousingLocation[] = []

  private prepareImage = (housingLocation: HousingLocation) => ({
    ...housingLocation,
    photo: `${this.photoUrl}/${housingLocation.photo}`,
  })
  private prepareImages = (housingLocationList: HousingLocation[]) =>
    housingLocationList.map((housingLocation) =>
      this.prepareImage(housingLocation)
    )

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.baseUrl)
    return this.prepareImages(await data.json()) ?? []
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`)

    return this.prepareImage(await data.json()) ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Application submitted for ${firstName} ${lastName} at ${email}`
    )
  }
}
