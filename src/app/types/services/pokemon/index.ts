export type NamedResource = {
  name: string;
  url: string;
};

export type Ability = {
  ability: NamedResource;
  is_hidden: boolean;
  slot: number;
};

export type Form = NamedResource;

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: NamedResource;
  version_group: NamedResource;
};

export type Move = NamedResource;

export type Mfe = {
  move: Move;
  version_group_details: VersionGroupDetail[];
};

export type Species = NamedResource;

export type Sprites = {
  back_default: string;
  back_female: any;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

export type Stat2 = NamedResource;

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Stat2;
};

export type Type2 = NamedResource;

export type Type = {
  slot: number;
  type: Type2;
};

export type TPokemon = {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type TGetPokemonsResult = {
  name: string;
  url: string;
}

export type TGetPokemonsResponse = {
  count: number;
  results: TGetPokemonsResult[];
}

export type TGetPokemonResponse = TPokemon;
