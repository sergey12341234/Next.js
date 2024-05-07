import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export class BaseApi {
  private baseEndpoint: string = '/api';
  /**
   * Sends a request to the auth api
   * @param ep endpoint to send request to
   * @returns the api get response
   */

  protected getRequest = async <ReturnType>(
    en: string, config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ReturnType> | AxiosError> => {
    try {
      const endpoint = this.baseEndpoint;

      const data = await axios.get([ endpoint, en ].join('/'), config);
      return data;
    } catch (e) {
      const error = e as AxiosError;

      return error;
    }
  };
}

export default new BaseApi();
