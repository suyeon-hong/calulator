import { useState, useRef } from 'react';
import { numberFommatting } from 'components/utils/functions';
import { NATION } from 'components/utils/constants';
import styled from 'styled-components';

const Calculator = ({ data }) => {
  const currencies = data.quotes;
  const [toNation, setToNation] = useState('KRW');
  const [exchangeRate, setExchangeRate] = useState(
    numberFommatting(currencies['USDKRW']),
  );
  const remitInput = useRef('');
  const [receivable, setReceivable] = useState(0);
  const [isValidate, setIsValidate] = useState(true);

  const checkCurrenyInfo = (e) => {
    setToNation(e.target.value);
    setExchangeRate(numberFommatting(currencies[`USD${e.target.value}`]));
  };

  const handleChange = (e) => {
    remitInput.current.value = e.target.value;
  };

  const calcAmount = () => {
    const input = remitInput.current.value;
    if (input === '' || input < 0 || input > 10000) {
      setIsValidate(false);
      remitInput.current.value = '';
      return;
    }
    setIsValidate(true);
    const amount = input * currencies[`USD${toNation}`];
    setReceivable(numberFommatting(amount));
    remitInput.current.value = '';
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
          type="number"
          placeholder="0"
          ref={remitInput}
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
`;

export default Calculator;
