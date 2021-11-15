import React from 'react';
import { Helmet } from 'react-helmet-async';
import BottomMenuBar from '../components/common/BottomMenuBar';

const ReportPage = () => {
  return (
    <div className="page_wrap p_19 bm">
      <Helmet>
        <title>Baguette - Report</title>
      </Helmet>
      <div>바게트 리포트</div>
      <BottomMenuBar />
    </div>
  );
};

export default ReportPage;
