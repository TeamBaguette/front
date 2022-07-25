import type { NextPage } from 'next';
import RadioCharacters from 'src/components/common/RadioCharacters';
import style from 'styles/common/example.module.scss';

const PageRadio: NextPage = () => {
  return (
    <div className={style.example}>
      <h1>Radio Sample</h1>
      <h2>character</h2>
      <RadioCharacters selectedIcon="butter" />
    </div>
  );
};

export default PageRadio;
