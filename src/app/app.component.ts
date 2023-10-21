import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private router: Router,
  ) { }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
