import type { NextPage } from 'next';
import style from 'styles/style.module.scss';

const Style: NextPage = () => {
  return (
    <>
      <h1>STYLE SAMPLE PAGE</h1>
      <button className={style.button}>
        <span>dddd</span>TEST
      </button>
    </>
  );
};

export default Style;
