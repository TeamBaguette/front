import React from 'react';
import { Helmet } from 'react-helmet-async';
import SampleTodoContainer from '../containers/sample/SampleTodoContainer';

const SamplePage = () => {
  return (
    <>
      <Helmet>
        <title>Redux 샘플 페이지</title>
      </Helmet>
      <SampleTodoContainer />
    </>
  );
};

export default SamplePage;
