import { API_KEY, BASE_URL } from '../constants';
import axios from 'axios';

const getApi = () => {
  const url = `${BASE_URL}?access_key=${API_KEY}&currencies=KRW,PHP,JPY&source=USD&format=1`;
  return axios.get(url);
};

export default getApi;
