import React from 'react';
import styled from 'styled-components';
import { MONTH } from 'components/utils/constants';

const ResultBox = ({
  activeNationList,
  toNation,
  receiveMoney,
  date,
  onClick,
}) => {
  return (
    <Container>
      <Tabs className="tabs" onClick={onClick}>
        {activeNationList.map((activeNation, index) => (
          <li key={index} id={activeNation}>
            {activeNation}
          </li>
        ))}
      </Tabs>
      <ContentBox>
        <p>
          {toNation} {receiveMoney}
        </p>
        <p>
          기준일 : <br />
          {date.getFullYear()}-{MONTH[date.getMonth()]}-{date.getDate()}
        </p>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid #000;
`;

const Tabs = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    width: 25%;
    box-sizing: border-box;
    padding: 5px 10px;
    cursor: pointer;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    text-align: center;

    &:last-child {
      border-right: none;
    }
    &.active {
      border-bottom: none;
    }
  }
`;

const ContentBox = styled.div`
  padding: 20px;
`;

export default ResultBox;
