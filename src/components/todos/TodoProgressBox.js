import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProgressLineBar from '../common/ProgressLineBar';

const TodoProgressBox = ({ theme, date, completeCount, totalCount }) => {
  const description = {
    0: '재료 계량중',
    30: '반죽중...',
    60: '빵 발효중....',
    90: '열심히 빵 굽는중...',
    99: '다 구워졌다!',
    100: '빵이 완전 잘 구워졌다 !',
  };

  const [dayName, setDayName] = useState('오늘');
  const [percent, setPercent] = useState(0);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    console.log(date);
  }, [date]);

  useEffect(() => {
    if (completeCount === 0 || totalCount === 0) {
      setPercent(0);
    } else {
      setPercent(Math.ceil((completeCount / totalCount) * 100));
    }
  }, [completeCount, totalCount]);

  useEffect(() => {
    setDesc(getDescription(percent));
  }, [percent]);

  const getDescription = (percent) => {
    let desc = '';

    if (percent === 0) {
      desc = description[0];
    } else if (percent <= 30) {
      desc = description[30];
    } else if (percent <= 60) {
      desc = description[60];
    } else if (percent <= 90) {
      desc = description[90];
    } else if (percent <= 99) {
      desc = description[99];
    } else if (percent === 100) {
      desc = description[100];
    }

    return desc;
  };

  return (
    <StyledProgressBox>
      <StyledWrap theme={theme}>
        <h2>{dayName}의 To-Do</h2>
        <div>
          <span className="complete">{completeCount}</span>
          <span> / {totalCount}</span>
        </div>
      </StyledWrap>
      <ProgressLineBar percent={percent} />
      <StyledWrap>
        <p>{desc}</p>
        <span className="percent">{percent}%</span>
      </StyledWrap>
    </StyledProgressBox>
  );
};

const StyledProgressBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 0;
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.text.deep};
  font-size: 1.2rem;
  font-family: 'Noto Sans KR';
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
  }

  p,
  .complete,
  .percent {
    color: ${(props) => props.theme.text.light};
  }
  span,
  div {
    font-weight: 500;
  }
`;

export default TodoProgressBox;
