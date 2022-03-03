import React from 'react';
import useAsync from 'components/hooks/useAsync';
import getApi from 'components/api/getApi';
import { GlobalStyle } from 'Styles/GlobalStyle';
import { Main } from 'components/page';

const App = () => {
  const [state] = useAsync(getApi, []);
  const { data, loading, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  return (
    <>
      <GlobalStyle />
      <Main data={data} />
    </>
  );
};

export default App;
