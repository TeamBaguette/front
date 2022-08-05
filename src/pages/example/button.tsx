import type { NextPage } from 'next';
import Button from 'src/components/common/Button';
import style from 'styles/common/example.module.scss';

const PageButton: NextPage = () => {
  return (
    <div className={style.example}>
      <h1>Button Sample</h1>
      <h2>Text</h2>
      <div>
        <h3>- Full (border round)</h3>
        <Button.Full>To-Do 저장</Button.Full>
        <Button.Full disabled={true}>To-Do 저장</Button.Full>
      </div>
      <h2>Icon</h2>
      <div>
        <h3>- add (round)</h3>
        <Button.Add />
      </div>
      <div>
        <h3>- middle</h3>
        <Button.Image iconName="calendar" />
        <Button.Image iconName="archive" />
        <Button.Image iconName="bell_black" />
        <Button.Image iconName="close_black" />
      </div>
      <div>
        <h3>- small</h3>
        <Button.Image className="small" iconName="more_gray" />
      </div>
    </div>
  );
};

export default PageButton;
