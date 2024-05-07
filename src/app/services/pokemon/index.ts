/* eslint-disable max-len */
import { AxiosError, isAxiosError } from 'axios';
import { TGetPokemonResponse, TGetPokemonsResponse } from '@/types/services/pokemon';
import { GET_POKEMONS_LIMIT } from '@/utils/constants';
import { BaseApi } from '../BaseApi';

type TGetPokemonByIdParams = {
  name: string;
}

type TGetPokemonsParams = {
  limit?: number;
  offset?: number;
}

class PokemonService extends BaseApi {
  async getPokemons({ offset = 0 }: TGetPokemonsParams): Promise<TGetPokemonsResponse | AxiosError> {
    const res = await this.getRequest<TGetPokemonsResponse>(`pokemon?limit=${GET_POKEMONS_LIMIT}&offset=${offset}`);

    if (!isAxiosError(res)) return res.data;

    return res;
  }

  /**
   * Sends a request to the auth api
   * @param name pokemon name for request
   * @returns the api response of pokemon info
   */

  async getPokemonById({ name }: TGetPokemonByIdParams): Promise<TGetPokemonResponse | AxiosError> {
    const res = await this.getRequest<TGetPokemonResponse>(`pokemon/${name}`);
    if (!isAxiosError(res)) return res.data;

    return res;
  }
}

export const PokemonApi = new PokemonService();
