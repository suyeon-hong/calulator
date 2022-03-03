import { useState } from 'react';
import { checkValidation, numberFommatting } from 'components/utils/functions';
import { NATION } from 'components/utils/constants';
import styled from 'styled-components';

const Calculator = ({ data }) => {
  const currencies = data.quotes;
  const [toNation, setToNation] = useState('KRW');
  const [exchangeRate, setExchangeRate] = useState(
    numberFommatting(currencies['USDKRW']),
  );
  const [userInput, setUserInput] = useState('');
  const [receivable, setReceivable] = useState(0);
  const [isValidate, setIsValidate] = useState(true);

  const checkCurrenyInfo = (e) => {
    setToNation(e.target.value);
    setExchangeRate(numberFommatting(currencies[`USD${e.target.value}`]));
  };

  const handleChange = (e) => {
    const target = e.target.value;
    if (/\D/g.test(target)) return;

    setUserInput(target);
  };

  const calcAmount = () => {
    setIsValidate(checkValidation(userInput));
    const amount = userInput * currencies[`USD${toNation}`];
    setReceivable(numberFommatting(amount));
    setUserInput('');
  };

  return (
    <Container>
      <h1>환율계산기1</h1>
      <p>송금국가 : 미국({NATION.미국})</p>
      <p>
        수취국가 :{' '}
        <select onChange={checkCurrenyInfo}>
          <option value={NATION.한국}>한국({NATION.한국})</option>
          <option value={NATION.일본}>일본({NATION.일본})</option>
          <option value={NATION.필리핀}>필리핀({NATION.필리핀})</option>
        </select>
      </p>
      <p>
        환율 : {exchangeRate}
        {toNation}/USD
      </p>
      <p>
        송금액 :{' '}
        <input
          type="text"
          placeholder="0"
          value={userInput}
          onChange={handleChange}
        />
        USD
      </p>
      <button onClick={calcAmount}>Submit</button>
      {isValidate ? (
        <p>
          수취금액은 {receivable} {toNation} 입니다.
        </p>
      ) : (
        <p>송금액이 바르지 않습니다</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  padding: 30px;
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    width: 100px;
    height: 30px;
    font-size: 15px;
    text-align: right;
    padding: 0 5px;
  }
`;

export default Calculator;
