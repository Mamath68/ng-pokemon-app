import { Router, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    this.authService = this.authService;
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}
