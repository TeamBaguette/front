import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

const MenuIcon = ({ icon, to, active }) => {
  console.log();
  const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  `;
  const IconImg = styled.img.attrs({
    src: `${process.env.REACT_APP_S3_URL}/icons/menu_${icon}${
      active ? '_active' : ''
    }.svg`,
  })`
    padding: 1rem 2rem;
  `;
  return (
    <StyledLink to={to}>
      <IconImg />
    </StyledLink>
  );
};

const BottomMenuBar = ({ location: { pathname } }) => {
  const MenuWrap = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: calc(5rem + env(safe-area-inset-bottom));
    padding-bottom: env(safe-area-inset-bottom);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  `;
  return (
    <MenuWrap>
      <MenuIcon icon="todo" to="/" active={pathname === '/'} />
      <MenuIcon icon="report" to="/report" active={pathname === '/report'} />
      <MenuIcon icon="setting" to="/setting" active={pathname === '/setting'} />
    </MenuWrap>
  );
};
export default withRouter(BottomMenuBar);
