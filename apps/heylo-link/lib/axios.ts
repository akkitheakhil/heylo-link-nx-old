import Axios, { AxiosError, AxiosResponse, RawAxiosRequestConfig } from 'axios';

const axiosClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

function httpClient({ ...options }: RawAxiosRequestConfig) {
  // headers
  // axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: AxiosError) => {
    // addition logic to add
    // 401: unauthorized -> redirect to login
    throw error;
  };
  return axiosClient(options).then(onSuccess).catch(onError);
}

export default httpClient;
