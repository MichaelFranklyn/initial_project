import axios, { AxiosPromise } from 'axios';
import config from '../../utils/config';

const facebookApi = axios.create({
  baseURL: config.FACEBOOK_API_HOST,
});

export const FacebookApi = (token: string | undefined, idCompany: any): AxiosPromise => {
  const result = facebookApi.get(`/authorize/${idCompany}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return result.then((res) => res);
};
