// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수 (api 대용 테스트용)
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// 소셜로그인 한 회원의 privateKey로 가입 여부 조회
export const checkRegister = async (socialPrivate) => {};

// 소셜 로그인 후 DB에 회원 정보 저장
export const register = async (userInfo) => {
  await sleep(500);
  console.log('DB save success Register', userInfo);
};
