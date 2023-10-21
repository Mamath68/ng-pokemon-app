/* Chapitre 6 : Les Routes */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `,
    standalone: true,
    imports: [RouterLink]
})
export class PageNotFoundComponent {


}