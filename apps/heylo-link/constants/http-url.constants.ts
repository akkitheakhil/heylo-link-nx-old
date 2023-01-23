export type URL_PATHS = 'CREATE_SHORT_LINK' | 'GET_SHORT_LINK';

export const API_ENDPOINTS: Record<URL_PATHS, string> = {
  CREATE_SHORT_LINK: `1/short-links`,
  GET_SHORT_LINK: `1/short-links`,
};
