import type { NextPage } from 'next';
import style from 'styles/common/example.module.scss';

const PageButton: NextPage = () => {
  return (
    <div className={style.example}>
      <h1>Button Sample</h1>
      <button className={style.button}>TEST</button>
    </div>
  );
};

export default PageButton;
