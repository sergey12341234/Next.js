import axios from 'axios';

export class BaseApi {
  protected baseEndpoint: string = '/api';
  /**
   * Sends a request to the auth api
   * @param ep endpoint to send request to
   * @returns the api get response
   */

  protected getRequest = async (en: string) => {
    const endpoint = this.baseEndpoint;

    const { data } = await axios.get([ endpoint, en ].join('/'));
    return data;
  };

  /**
   * Sends a request to the auth api
   * @param body body of post request
   * @returns the api post response
   */

  protected postRequest = async <T>(en: string, body: T) => {
    const endpoint = this.baseEndpoint;
    const res = await axios.post<{id: number}>([ endpoint, en ].join('/'), {
      body,
    });
    return res;
  };
}

export default new BaseApi();
