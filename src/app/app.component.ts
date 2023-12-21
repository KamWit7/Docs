import { Component } from "@angular/core"
import { HomeComponent } from "./home/home.component"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img
            src="/assets/logo.svg"
            alt=""
            class="brand-logo"
            aria-hidden="true"
          />
        </a>
      </header>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Hello World!"
}
