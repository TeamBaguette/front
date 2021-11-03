import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SampleTodoComponent from '../../components/sample/SampleTodoComponent';
import { addTodo, toggleTodo } from '../../modules/sample';

const SampleTodoContainer = () => {
  const todos = useSelector((state) => state.sample); // store에서 필요한 상태 조회
  const dispatch = useDispatch();

  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return (
    <>
      <div></div>
      <SampleTodoComponent
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
      />
    </>
  );
};

export default SampleTodoContainer;
