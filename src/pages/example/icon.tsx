import type { NextPage } from 'next';
import Icon from 'src/components/common/Icon';
import style from 'styles/common/example.module.scss';

const PageIcon: NextPage = () => {
  return (
    <div className={style.example}>
      <h1>Icon Sample</h1>
      <h2>character</h2>
      <p>-그룹 투두 리스트 캐릭터 아이콘</p>
      <Icon
        folderName="characters"
        iconName="butter"
        className="character--list"
      />
      <Icon
        folderName="characters"
        iconName="strawberry"
        className="character--list"
      />
      <Icon
        folderName="characters"
        iconName="water"
        className="character--list"
      />
      <Icon
        folderName="characters"
        iconName="nutella"
        className="character--list"
      />
    </div>
  );
};

export default PageIcon;
