import React from 'react';
import { Helmet } from 'react-helmet-async';
import BottomMenuBar from '../components/common/BottomMenuBar';

const MainPage = () => {
  return (
    <div className="page_wrap p_19 bm">
      <Helmet>
        <title>Baguette - Main</title>
      </Helmet>
      <div>바게트 홈</div>
      <BottomMenuBar />
    </div>
  );
};

export default MainPage;
