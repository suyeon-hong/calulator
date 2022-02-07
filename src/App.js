import React from 'react';
import axios from 'axios';
import useAsync from './components/hooks/useAsync';
import Calculator from './components/Calculator/Calculator';


const getApi = async () => {
  const url = `http://apilayer.net/api/live?access_key=486b1357b8eb333bdd3e5056a38d41ef&currencies=KRW,PHP,JPY&source=USD&format=1`;
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  const [state, refetch] = useAsync(getApi, []);
  const { data, loading, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  return (
    <>
      <Calculator data={data} />
    </>
  );
};

export default App;

