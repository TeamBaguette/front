import React from 'react';
import { withRouter } from 'react-router-dom';

const KakaoLoginButton = ({ history }) => {
  const { Kakao } = window;
  const loginType = 'kakao';
  const loginWithKakao = () => {
    // 카카오 인스턴스 없을 경우
    if (!Kakao) return false;

    Kakao.Auth.login({
      // Auth.login으로 카카오 로그인
      success: (response) => {
        // 로그인 되었다면 카카오 계정의 privateKey 조회
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            console.log(response);
            const {
              id,
              kakao_account: {
                email, // 카카오 email의 경우 선택사항이라 undefined 가능
                profile: { nickname },
              },
            } = response;

            onSuccess(id, email, nickname);
          },
        });
      },
      fail: (err) => {
        console.error(err);
      },
    });
  };

  const onSuccess = (privateKey, email, nickname) => {
    console.log(privateKey, email, nickname);
    // 콜백 페이지로 회원 정보를 가지고 이동
    history.push({
      pathname: `/auth/${loginType}`,
      props: {
        userInfo: {
          socialPrivate: privateKey,
          socialType: loginType,
          email: email ? email : null, // 없을 경우 null
          userName: nickname,
        },
      },
    });
  };

  return <button onClick={loginWithKakao}>카카오 로그인</button>;
};

export default withRouter(KakaoLoginButton);
