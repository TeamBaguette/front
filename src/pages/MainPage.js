import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BottomMenuBar from '../components/common/BottomMenuBar';
import TodoProgressBox from '../components/todos/TodoProgressBox';

const MainPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="page_wrap p_19 bm">
      <Helmet>
        <title>Baguette - Main</title>
      </Helmet>
      <TodoProgressBox date={date} completeCount={0} totalCount={0} />
      <BottomMenuBar />
    </div>
  );
};

export default MainPage;
