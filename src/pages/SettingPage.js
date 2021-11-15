import React from 'react';
import { Helmet } from 'react-helmet-async';
import BottomMenuBar from '../components/common/BottomMenuBar';

const SettingPage = () => {
  return (
    <div className="page_wrap p_19 bm">
      <Helmet>
        <title>Baguette - Setting</title>
      </Helmet>
      <div>바게트 설정</div>
      <BottomMenuBar />
    </div>
  );
};

export default SettingPage;
