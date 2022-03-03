import { removeComma } from 'components/utils/functions';
import styled from 'styled-components';

const UserInput = ({
  userInput,
  setUserInput,
  nation,
  calcAmount,
  setFromNation,
}) => {
  const changeHandler = (e) => {
    if (e.target.value === '') {
      setUserInput('');
      return;
    }

    const targetWithoutComma = removeComma(e.target.value);

    if (/\D/g.test(targetWithoutComma)) return;

    setUserInput(parseInt(targetWithoutComma).toLocaleString());
    calcAmount();
  };
  const getFromNation = (e) => {
    setFromNation(e.target.value);
  };

  return (
    <Container>
      <Input type="text" value={userInput} onChange={changeHandler} />
      <Select onChange={getFromNation}>
        {nation &&
          nation.map((nation, index) => (
            <option key={index} value={nation}>
              {nation}
            </option>
          ))}
      </Select>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 150px;
  height: 100%;
  border: 2px solid #000;
  text-align: right;
  padding: 0 10px;
  font-size: 18px;
`;

const Select = styled.select`
  width: 100px;
  height: 100%;
  border: 2px solid #000;
  padding: 0 10px;
  font-size: 16px;
`;

export default UserInput;
