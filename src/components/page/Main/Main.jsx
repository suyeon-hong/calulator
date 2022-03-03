import { Calculator, Calculator2 } from 'components/domain';
import styled from 'styled-components';

const Main = ({ data }) => {
  return (
    <Wrapper>
      <Calculator data={data} />
      <Calculator2 data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 200px;
  display: flex;
  justify-content: space-around;
`;

export default Main;
