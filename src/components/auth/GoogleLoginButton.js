import React from 'react';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Button from '../common/Button';

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
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          radius="8"
          bgColor={(props) => props.theme.button.google}
          txtColor={(props) => props.theme.text.deep}
          logo="logos/google_logo.svg"
        >
          구글로 로그인
        </Button>
      )}
    />
  );
};

export default withRouter(GoogleLoginButton);
