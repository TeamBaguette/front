import React, { useState } from 'react';

const Items = React.memo(({ todo, onToggle }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const List = React.memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Items key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

const SampleTodoComponent = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };
  return (
    <>
      <div>샘플 투두 컴포넌트</div>
      <div>
        <form onSubmit={onSubmit}>
          <input value={text} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
        <List todos={todos} onToggle={onToggle} />
      </div>
    </>
  );
};

export default React.memo(SampleTodoComponent);
