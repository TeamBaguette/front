import type { NextPage } from 'next';
import Icon from 'src/components/common/Icon';
import style from 'styles/common/example.module.scss';

const PageIcon: NextPage = () => {
  return (
    <div className={style.example}>
      <h1>Icon Sample</h1>
      <h2>character</h2>
      <div>
        <h3>-그룹 투두 리스트 캐릭터 아이콘</h3>
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
      <div>
        <h3>- 바게트</h3>
        <Icon
          folderName="icons"
          iconName="progress_baguette"
          className="baguette"
        />
        <Icon
          folderName="icons"
          iconName="progress_baguette_complete"
          className="baguette"
        />
      </div>
      <div>
        <h3>- small</h3>
        <Icon folderName="icons" iconName="clock_gray" className="small" />
        <Icon folderName="icons" iconName="bell_gray" className="small" />
      </div>
    </div>
  );
};

export default PageIcon;
