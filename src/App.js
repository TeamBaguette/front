import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import { lightMode } from './utils/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/common/GlobalStyle';
import MainPage from './pages/MainPage';
import SampleStylePage from './pages/SampleStylePage';
import SamplePage from './pages/SamplePage';
import LoginPage from './pages/LoginPage';
import AuthCallBackPage from './pages/AuthCallBackPage';

function App() {
  useEffect(() => {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_CLIENT;
    // Kakao SDK 초기화 여부 확인 후 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY); // 초기화
      // console.log(window.Kakao.isInitialized());
    }
  }, []);

  return (
    <ThemeProvider theme={lightMode}>
      {/* 테마 모드 설정: 우선 기본으로 light */}
      <GlobalStyle /> {/* reset.css */}
      <Helmet>
        <title>바게트</title>
      </Helmet>
      {/* main */}
      <Route component={MainPage} path={'/'} exact />
      {/* auth (login 관련) */}
      <Route component={LoginPage} path={'/login'} />
      <Route component={AuthCallBackPage} path={'/auth/:type'} />
      {/* sample */}
      <Route component={SampleStylePage} path={'/style'} exact />
      <Route component={SamplePage} path={'/redux'} exact />
    </ThemeProvider>
  );
}

export default App;
