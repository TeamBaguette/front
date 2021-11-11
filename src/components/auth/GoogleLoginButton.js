import React from 'react';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = ({ history }) => {
  const loginType = 'google';
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_CLIENT;

  const onSuccess = async (response) => {
    // console.log('Google Login Response', response);
    const {
      googleId,
      profileObj: { email, name },
    } = response;

    // 콜백 페이지로 회원 정보를 가지고 이동
    history.push({
      pathname: `/auth/${loginType}`,
      props: {
        userInfo: {
          socialPrivate: googleId,
          socialType: loginType,
          email,
          userName: name,
        },
      },
    });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_KEY}
      responseType={'id_token'}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default withRouter(GoogleLoginButton);
