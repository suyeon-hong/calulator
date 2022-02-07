import { useEffect, useState, useCallback, useRef } from 'react';

const numberFommatting = (number) => {
  return number.toLocaleString('KR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const Calculator = ({ data }) => {
  const [currencies, setCurrencies] = useState(data.quotes);
  const [fromNation, setFromNation] = useState('KRW');
  const [exchangeRate, setExchangeRate] = useState(
    numberFommatting(data.quotes[`USDKRW`]),
  );
  const remitInput = useRef('');
  const [receivable, setReceivable] = useState(0);
  const [validate, setValidate] = useState(true);

  const checkNation = (e) => {
    setFromNation(e.target.value);
    setExchangeRate(numberFommatting(currencies[`USD${e.target.value}`]));
  };

  const handleChange = (e) => {
    remitInput.current.value = e.target.value;
  };

  const calcAmount = () => {
    const input = remitInput.current.value;
    if (input === '' || input < 0 || input > 10000) {
      setValidate(false);
      remitInput.current.value = '';
      return;
    }
    setValidate(true);
    const amount = input * currencies[`USD${fromNation}`];
    setReceivable(numberFommatting(amount));
    remitInput.current.value = '';
  };

  return (
    <>
      <h1>환율계산기</h1>
      <p>송금국가 : 미국(USD)</p>
      <p>
        수취국가 :{' '}
        <select onChange={checkNation}>
          <option value="KRW">한국(KRW)</option>
          <option value="JPY">일본(JPY)</option>
          <option value="PHP">필리핀(PHP)</option>
        </select>
      </p>
      <p>
        환율 : {exchangeRate}
        {fromNation}/USD
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
      {validate && validate ? (
        <p>
          수취금액은 {receivable} {fromNation} 입니다.
        </p>
      ) : (
        <p>송금액이 바르지 않습니다</p>
      )}
    </>
  );
};

export default Calculator;
