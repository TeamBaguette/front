import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthContainer from '../containers/auth/AuthContainer';

const AuthCallBackPage = ({ location, history }) => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    if (!location.props) {
      alert('회원정보 없음');
      history.push('/');
    } else {
      const { userInfo } = location.props;
      setUserInfo(userInfo);
    }
  }, [location, history]);
  return (
    <>
      <Helmet>
        <title>바게트 - 로그인 결과</title>
      </Helmet>
      {userInfo && <AuthContainer userInfo={userInfo} />}
    </>
  );
};

export default AuthCallBackPage;
