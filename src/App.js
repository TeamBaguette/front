import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import { lightMode } from './utils/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/common/GlobalStyle';
import MainPage from './pages/MainPage';
import SampleStylePage from './pages/SampleStylePage';

function App() {
  return (
    <ThemeProvider theme={lightMode}>
      {/* 테마 모드 설정: 우선 기본으로 light */}
      <GlobalStyle /> {/* reset.css */}
      <Helmet>
        <title>바게트</title>
      </Helmet>
      <Route component={MainPage} path={'/'} exact />
      <Route component={SampleStylePage} path={'/style'} exact />
    </ThemeProvider>
  );
}

export default App;
