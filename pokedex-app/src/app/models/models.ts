export type Card = {
  id: string;
  name: string
  supertype: string
  subtypes:string[];
}

export type AllCards = {
  data: Card[]
}

export type PokemonListItem = {
  id: string;
  name: string;
}
