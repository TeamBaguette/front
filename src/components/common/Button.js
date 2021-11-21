import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, onClick, logo, radius, bgColor, txtColor }) => {
  return (
    <StyledButton
      logo={logo}
      radius={radius}
      bgColor={bgColor}
      txtColor={txtColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  /* 기본값 {radius:3rem, color:white, bgColor:blue} */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) =>
    props.txtColor ? props.txtColor : props.theme.button.main.text};
  border-radius: ${(props) => (props.radius ? `${props.radius}rem` : '3rem')};
  background: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.button.main.bg};

  /* logo 있을경우 앞쪽 */
  ${(props) =>
    props.logo &&
    css`
      &:before {
        content: '';
        width: 1.9rem;
        height: 1.6rem;
        background: url('${process.env.REACT_APP_S3_URL}/${props.logo}')
          no-repeat;
        position: absolute;
        left: 3.2rem;
      }
    `}

  &:disabled {
    background: ${(props) => props.theme.button.disable.bg};
    color: ${(props) => props.theme.button.disable.color};
    cursor: not-allowed;
  }
  &:not(:first-child) {
    margin-top: 0.8rem;
  }
`;
export default Button;
