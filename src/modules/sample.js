// 액션
const ADD_TODO = 'sample/ADD_TODO';
const TOGGLE_TODO = 'sample/TOGGLE_TODO';

// 액션 생성 함수 (export)
let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO, // ADD_TODO를 실행
  todo: {
    // 실행 하면서 넘겨줄 파리미터
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: ADD_TODO,
  id,
});

// 초기 state
const initialState = [];

// reducer
export default function sample(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return state;
  }
}
