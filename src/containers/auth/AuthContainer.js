import React, { useEffect, useState } from 'react';

const AuthContainer = ({ userInfo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { socialPrivate, socialType, email, userName } = userInfo;
    try {
      console.log(
        '콜백 회원 정보:',
        socialPrivate,
        socialType,
        email,
        userName,
      );
      // api 연결 => 성공시 리덕스 업데이트 & loading false & 이동
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  }, [userInfo]);

  return <>{loading && <div>Loading...</div>}</>;
};

export default AuthContainer;
