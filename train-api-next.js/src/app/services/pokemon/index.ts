/* eslint-disable max-len */
import { TGetPokemonResponse, TGetPokemonsResponse } from '@/app/types/services/pokemon';
import { GET_POKEMONS_LIMIT } from '@/app/utils/constants';
import { BaseApi } from '../BaseApi';

type TGetPokemonByIdParams = {
  name: string;
}

type TGetPokemonsParams = {
  limit?: number;
  offset?: number;
}

class PokemonService extends BaseApi {
  async getPokemons({ offset = 0 }: TGetPokemonsParams): Promise<TGetPokemonsResponse> {
    const res = await this.getRequest(`pokemon?limit=${GET_POKEMONS_LIMIT}&offset=${offset}`);
    return res;
  }

  /**
   * Sends a request to the auth api
   * @param name pokemon name for request
   * @returns the api response of pokemon info
   */

  async getPokemonById({ name }: TGetPokemonByIdParams): Promise<TGetPokemonResponse> {
    const res = await this.getRequest(`pokemon/${name}`);
    return res;
  }
}

export const PokemonApi = new PokemonService();
