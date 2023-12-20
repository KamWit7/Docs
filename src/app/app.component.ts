import { Component } from "@angular/core"
import { HomeComponent } from "./home/home.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent],
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
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Hello World!"
}
