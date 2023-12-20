import { Component } from "@angular/core"
import { HomeComponent } from "./home/home.component"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <header className="brand-name">
        <img
          src="/assets/logo.svg"
          alt=""
          className="brand-logo"
          aria-hidden="true"
        />
      </header>
      <section className="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Hello World!"
}
