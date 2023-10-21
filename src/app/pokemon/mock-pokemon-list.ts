/* Chapitre 2 : Les Composants */
import { Pokemon } from './pokemon';

export const POKEMONS: Pokemon[] = [
    {
        id: 1,
        name: "Bulbizarre",
        hp: 45,
        cp: 49,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: "Herbizarre",
        hp: 60,
        cp: 62,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 3,
        name: "Florizarre",
        hp: 80,
        cp: 82,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 4,
        name: "Salamèche",
        hp: 39,
        cp: 52,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 5,
        name: "Reptincel",
        hp: 58,
        cp: 64,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 6,
        name: "Dracaufeu",
        hp: 78,
        cp: 84,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        types: ["Feu", "Vol"],
        created: new Date()
    },
    {
        id: 7,
        name: "Carapuce",
        hp: 44,
        cp: 48,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 8,
        name: "Carabaffe",
        hp: 59,
        cp: 63,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 9,
        name: "Tortank",
        hp: 79,
        cp: 83,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 10,
        name: "Chenipan",
        hp: 45,
        cp: 30,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
        types: ["Insecte"],
        created: new Date()
    },
    {
        id: 11,
        name: "Chrysacier",
        hp: 50,
        cp: 20,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
        types: ["Insecte"],
        created: new Date()
    },
    {
        id: 12,
        name: "Papilusion",
        hp: 60,
        cp: 45,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
        types: ["Insecte", "Vol"],
        created: new Date()
    }
];