import React from 'react';
import styled from 'styled-components';

const TodoMonthlyBox = ({ onClickViewCalendar }) => {
  return (
    <StyledMothlyBox>
      <StyledDateTab>10월, 2021</StyledDateTab>
      <StyledIconTab>
        <StyledIcon icon="calendar" onClick={onClickViewCalendar} />
        <StyledIcon icon="archive" />
      </StyledIconTab>
    </StyledMothlyBox>
  );
};

const StyledMothlyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const StyledDateTab = styled.div`
  color: ${(props) => props.theme.text.deep};
  font-size: 1.5rem;
  font-family: 'Noto Sans KR';
  font-weight: 700;
`;

const StyledIconTab = styled.div`
  display: flex;
`;

const StyledIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.9rem;
  background: ${(props) =>
      `url(${process.env.REACT_APP_S3_URL}/icons/${props.icon}.svg)`}
    no-repeat;
  & + & {
    margin-left: 2rem;
  }
`;
export default TodoMonthlyBox;
