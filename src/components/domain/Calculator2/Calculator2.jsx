import { numberFommatting, removeComma } from 'components/utils/functions';
import { NATION } from 'components/utils/constants';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ResultBox, UserInput } from 'components/base';

const Calculator2 = ({ data }) => {
  const currencies = data.quotes;
  const time = data.timestamp * 1000;
  const date = new Date(time);
  const [userInput, setUserInput] = useState('');
  const [fromNation, setFromNation] = useState(NATION.미국);
  const [toNation, setToNation] = useState(NATION.캐나다);
  const [receiveMoney, setReceiveMoney] = useState(0);
  const nation = [
    NATION.미국,
    NATION.캐나다,
    NATION.한국,
    NATION.홍콩,
    NATION.일본,
    NATION.중국,
  ];
  const [activeNationList, setActiveNationList] = useState(nation);

  const calcAmount = () => {
    setReceiveMoney(
      numberFommatting(
        (removeComma(userInput) / currencies[`USD${fromNation}`]) *
          currencies[`USD${toNation}`],
      ),
    );
  };

  const clickHandler = (e) => {
    e.target
      .closest('.tabs')
      .querySelectorAll('li')
      .forEach((li) => li.classList.remove('active'));
    e.target.classList.add('active');
    setToNation(e.target.id);
  };

  useEffect(() => {
    document.querySelector('.tabs li').classList.add('active');
  }, []);

  useEffect(() => {
    calcAmount();
  }, [toNation, fromNation]);

  useEffect(() => {
    setActiveNationList(nation.filter((nation) => nation !== fromNation));
  }, [fromNation]);

  return (
    <Container>
      <h1>환율계산기2</h1>
      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        nation={nation}
        calcAmount={calcAmount}
        setFromNation={setFromNation}
      />
      <ResultBox
        activeNationList={activeNationList}
        toNation={toNation}
        receiveMoney={receiveMoney}
        date={date}
        onClick={clickHandler}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  padding: 30px;
  border: 2px solid #000;
  border-radius: 10px;

  h1 {
    margin-bottom: 20px;
  }
`;

export default Calculator2;
