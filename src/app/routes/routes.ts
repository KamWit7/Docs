import { Route } from "@angular/router"
import { HomeComponent } from "../home/home.component"
import { DetailsComponent } from "../details/details.component"

const routeConfig: Route[] = [
  {
    path: "",
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Details Page",
  },
]

export default routeConfig
