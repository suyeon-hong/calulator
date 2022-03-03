import { API_KEY, BASE_URL } from 'components/utils/constants';
import axios from 'axios';

const getApi = async () => {
  const url = `${BASE_URL}?access_key=${API_KEY}&currencies=KRW,PHP,JPY,CAD,HKD,CNY,USD&source=USD&format=1`;
  const response = await axios.get(url);
  return response.data;
};

export default getApi;
