import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, onClick, logo, radius, bgColor, color }) => {
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
    color: ${(props) => (color ? color : props.theme.button.main.text)};
    border-radius: ${radius ? `${radius}rem` : '3rem'};
    background: ${(props) => (bgColor ? bgColor : props.theme.button.main.bg)};

    /* logo 있을경우 앞쪽 */
    ${logo &&
    css`
      &:before {
        content: url('./assets/${logo}');
        position: absolute;
        top: center;
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
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
