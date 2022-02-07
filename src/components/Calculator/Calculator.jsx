import { useState, useRef } from 'react';

const numberFommatting = (number) => {
  return number.toLocaleString('KR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

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
    <>
      <h1>환율계산기</h1>
      <p>송금국가 : 미국(USD)</p>
      <p>
        수취국가 :{' '}
        <select onChange={checkCurrenyInfo}>
          <option value="KRW">한국(KRW)</option>
          <option value="JPY">일본(JPY)</option>
          <option value="PHP">필리핀(PHP)</option>
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
    </>
  );
};

export default Calculator;
