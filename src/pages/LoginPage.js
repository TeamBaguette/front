import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import KakaoLoginButton from '../components/auth/KakaoLoginButton';

const LoginPage = () => {
  return (
    <LoginPageCenterWrap className="page_wrap p_28">
      <Helmet>
        <title>바게트 - 로그인</title>
      </Helmet>
      <SloganImg />
      <KakaoLoginButton />
      <GoogleLoginButton />
      <BigBaguetteImg />
    </LoginPageCenterWrap>
  );
};

const LoginPageCenterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.theme.page_bg.point}; ;
`;

const SloganImg = styled.img.attrs({
  src: `${process.env.REACT_APP_S3_URL}/logos/slogan_main_white.svg`,
})`
  position: absolute;
  top: 8.63rem;
  width: 16.1rem;
  height: 5.5rem;
`;

const BigBaguetteImg = styled.img.attrs({
  src: `${process.env.REACT_APP_S3_URL}/logos/baguette_big.svg`,
})`
  position: absolute;
  left: -0.5rem;
  bottom: 0;
  width: 21.533rem;
  height: 11.4rem;
`;
export default LoginPage;
