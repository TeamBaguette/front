import React from 'react';
import { Helmet } from 'react-helmet-async';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import KakaoLoginButton from '../components/auth/KakaoLoginButton';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>바게트 - 로그인</title>
      </Helmet>
      <div>로그인</div>
      <GoogleLoginButton />
      <KakaoLoginButton />
    </>
  );
};

export default LoginPage;
