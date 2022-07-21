import type { NextPage } from 'next';
import style from 'styles/common/Button.module.scss';

const PageButton: NextPage = () => {
  return (
    <>
      <h1>Button Sample</h1>
      <button className={style.button}>TEST</button>
    </>
  );
};

export default PageButton;
