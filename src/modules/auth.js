import * as authAPI from '../utils/api/auth';

/* 액션 타입 */

// 회원가입
const REGISTER = 'auth/REGISTER'; // 요청 시작
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'; // 요청 성공
const REGISTER_ERROR = 'auth/REGISTER_ERROR'; // 요청 실패

/* 미들웨어 + 액션 생성 함수 */
export const register = (userInfo) => async (dispatch) => {
  dispatch({ type: REGISTER }); // 요청이 시작됨
  try {
    const user = await authAPI.register(userInfo); // API 호출
    dispatch({ type: REGISTER_SUCCESS, user }); // 성공
  } catch (e) {
    dispatch({ type: REGISTER_ERROR, error: e }); // 실패
  }
};

/* 초기 상태 */
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  auth: null,
  authError: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          loading: true,
          data: action.userInfo,
          error: null,
        },
      };
    case REGISTER_ERROR:
      return {
        ...state,
        register: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
