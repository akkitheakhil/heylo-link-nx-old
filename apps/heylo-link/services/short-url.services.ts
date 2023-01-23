import { API_ENDPOINTS } from '../constants/http-url.constants';
import httpClient from '../lib/axios';
import { ShortLink } from '../models/short-link.model';

export const createNewShortLink = (url: string): Promise<ShortLink> => {
  const body = {
    url,
  };
  const apiUrl = API_ENDPOINTS.CREATE_SHORT_LINK;
  return httpClient({ url: apiUrl, method: 'post', data: body });
};

export const getShortLink = (slug: string): Promise<ShortLink> => {
  const url = API_ENDPOINTS.GET_SHORT_LINK + `/${slug}`;
  return httpClient({ url, method: 'get' });
};
