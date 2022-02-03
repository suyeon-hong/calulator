const Calulator = () => {
  return (
    <>
      <h1>환율계산기</h1>
      <p>송금국가 : 미국(USD)</p>
      <p>
        수취국가 :
        <select>
          <option>한국(KRW)</option>
        </select>
      </p>
      <p>환율 : 0000KRW/USD</p>
      <p>
        송금액 : <input></input>USD
      </p>
      <button>Submit</button>
      <p>수취금액은 00000 KRW 입니다.</p>
      <p>송금액이 바르지 않습니다</p>
    </>
  );
};

export default Calulator;
