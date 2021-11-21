import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
// import 'react-datepicker/dist/react-datepicker.css'; // datepicker 원래 stylesheet
import styled from 'styled-components';

const Calendar = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale('ko', ko);

  // 요일 반환
  const getDayName = (date) => {
    return date.toLocaleDateString('ko-KR', { weekday: 'long' }).substr(0, 1);
  };

  // 날짜 비교시 년 월 일 까지만 return
  const createDate = (date) => {
    return new Date(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
  };

  return (
    <StyledCalendar theme={props.theme}>
      <DatePicker
        locale="ko"
        selected={startDate}
        onChange={setStartDate}
        popperModifiers={{ preventOverflow: { enabled: true } }} // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
        popperPlacement="auto" // 화면 중앙
        dayClassName={(date) => (getDayName(createDate(date)) === '일' ? 'holiday' : undefined)}
        inline
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div>
            <button
              aria-label="Previous Month"
              className={'react-datepicker__navigation react-datepicker__navigation--previous'}
              onClick={decreaseMonth}
            >
              <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'}>
                <StyledArrow direction="left" />
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString('ko-KR', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <button
              aria-label="Next Month"
              className={'react-datepicker__navigation react-datepicker__navigation--next'}
              onClick={increaseMonth}
            >
              <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'}>
                <StyledArrow direction="right" />
              </span>
            </button>
          </div>
        )}
      />
    </StyledCalendar>
  );
};
const StyledCalendar = styled.div`
  .react-datepicker {
    width: 100%;
    height: 32.5rem;
    position: relative;
    padding: 1.3rem 1.5em;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
    font-family: 'Noto Sans KR';
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.page_bg.default};
    color: ${(props) => props.theme.text.deep};

    .react-datepicker__navigation {
      width: 0.5rem;
      height: 0.9rem;
      position: absolute;
      top: 1.75rem;
      background: none;
      text-indent: -999rem;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
      }

      &.react-datepicker__navigation--previous {
        left: 2.6rem;
      }

      &.react-datepicker__navigation--next {
        right: 2.6rem;
      }
    }

    .react-datepicker__month-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .react-datepicker__header {
        display: flex;
        flex-direction: column;

        .react-datepicker__current-month {
          display: flex;
          justify-content: center;
          padding: 0.5rem 0 1rem;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .react-datepicker__day-names {
          display: flex;
          justify-content: space-between;

          .react-datepicker__day-name {
            width: 3rem;
            height: 3rem;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            &:first-child {
              color: ${(props) => props.theme.text.holiday};
            }
          }
        }
      }

      .react-datepicker__month {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .react-datepicker__week {
        display: flex;
        justify-content: space-between;

        .react-datepicker__day {
          width: 3rem;
          height: 3rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;

          &.holiday {
            color: ${(props) => props.theme.text.holiday};
          }

          &.react-datepicker__day--selected {
            border-radius: 50%;
            background-color: ${(props) => props.theme.text.bg_main};
            color: ${(props) => props.theme.text.pure};
          }
        }
      }
    }
  }
`;

const StyledArrow = styled.img.attrs((props) => ({
  src: `${process.env.REACT_APP_S3_URL}/icons/calendar_arrow_${props.direction}.svg`,
}))``;

export default Calendar;
