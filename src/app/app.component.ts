import { Router, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent {
  constructor(
    private router: Router,
  ) { }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
