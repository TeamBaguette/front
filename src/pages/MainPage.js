import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BottomMenuBar from '../components/common/BottomMenuBar';
import Calendar from '../components/common/Calendar';
import TodoMonthlyBox from '../components/todos/TodoMonthlyBox';
import TodoProgressBox from '../components/todos/TodoProgressBox';

const MainPage = () => {
  const [date, setDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState(false);

  const onClickViewCalendar = () => {
    setCalendarView(true);
  };

  return (
    <div className="page_wrap p_19 bm">
      <Helmet>
        <title>Baguette - Main</title>
      </Helmet>
      <TodoMonthlyBox onClickViewCalendar={onClickViewCalendar} />
      <TodoProgressBox date={date} completeCount={0} totalCount={0} />
      {calendarView && <Calendar />}
      <BottomMenuBar />
    </div>
  );
};

export default MainPage;
