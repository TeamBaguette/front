// 참고용 samplePage, 추후 삭제 또는 스타일 메뉴얼 페이지로 사용해도 될 듯

import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SampleStylePage = () => {
  return (
    <>
      <Helmet>
        <title>samplePage</title>
      </Helmet>
      <div>
        <h1>styled-component Sample</h1>
        <div>
          <div>props, theme 사용</div>
          <StyledButton>회색 버튼</StyledButton>
          <StyledButton light>밝은 버튼</StyledButton>
        </div>
        <div>
          <div>이미 만들어진 style 활용</div>
          <NavLink to="/">메인으로 가는 Link</NavLink>
          <NavLink2 to="/">메인으로 가는 Link2</NavLink2>
        </div>
        <div>
          <div>attr 사용</div>
          <Input small placeholder="Small" />
          <Input type="password" />
        </div>
        <div>
          <div>mixin 사용</div>
          <Card />
          <Card2 />
        </div>
        <Container>
          <div>Nesting</div>
          <Card />
          <Card />
          <Card />
        </Container>
      </div>
    </>
  );
};

// props로 삼항연산자 + theme 사용
const StyledButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${(props) =>
    props.light ? props.theme.button.main.bg : props.theme.button.disable.bg};
  margin: 1rem;
`;

// button style을 아예 똑같이 적용
const NavLink = StyledButton.withComponent(Link);

// button style을 적용한 navlink에서 추가로 스타일을 적용하고 싶을때
const NavLink2 = styled(NavLink)`
  text-decoration: none;
`;

//attr 활용 (object로 작성)
const Input = styled.input.attrs((props) => ({
  type: props.type ? props.type : 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
`;

// mixin : 공통적인 css 만들어서 styled-component(Card)에 여러번 활용 가능
const commonMixin = css`
  border: 1px solid lightgrey;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.11);
  margin: 1rem;
`;

const Card = styled.div`
  border-radius: 1rem;
  ${commonMixin}
`;

const Card2 = styled.div`
  border-radius: 3rem;
  ${commonMixin}
`;

// Nesting
const Container = styled.div`
  ${Card} {
    background-color: black;
    &:last-child {
      background-color: gray;
    }
  }
`;

export default SampleStylePage;
