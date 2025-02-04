export type Card = {
  id: string;
  name: string;
  hp: string
  evolvesFrom: string;
  images: Image;
  supertype: string;
  types: string[];
  subtypes: string[];
} | undefined

export type Image = {
  small: string; large: string
};

export type AllCardsResponse = {
  data: Card[];
}

export type SingleCardResponse = {
  data: Card;
}

export type SimpleTypes = {
  data: string[];
}

export type PokemonListItem = {
  id: string;
  name: string;
}

export type PokemonQuery = {
  property: string;
  value: string;
}

export type Types = string[] | undefined
export type Subtypes = string[] | undefined
export type Supertypes = string[] | undefined

export enum FilteringProperties {
  TYPE = 'Types',
  SUBTYPE = 'Subtypes',
  SUPERTYPE = 'Supertype'
}
