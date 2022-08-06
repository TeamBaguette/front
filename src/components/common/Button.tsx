import classNames from 'classnames';
import ButtonStyle from 'styles/common/Button.module.scss';
import Icon from './Icon';

type Button = React.PropsWithChildren<{
  buttonType?: string;
  className?: string; // 추가로 스타일을 주고 싶을 경우
  disabled?: boolean;
  onClick?: () => void;
}>;

type ButtonIcon = Button & {
  iconName: string;
};

const Button: React.FC<Button> = props => {
  const { buttonType, className, disabled, onClick } = props;
  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(
        ButtonStyle.button, // 기본 button 공통 스타일
        ButtonStyle[`button--${buttonType}`], // button 타입별 스타일
        className && ButtonStyle[className],
        disabled && ButtonStyle.disabled,
      )}
      aria-disabled={disabled}
      onClick={onClick}
    >
      <span>{props.children}</span>
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

const Full: React.FC<Button> = props => <Button buttonType="full" {...props} />;
const Add: React.FC<Button> = props => (
  <Button buttonType="add" {...props}>
    <Icon folderName="icons" iconName="plus_white" />
  </Button>
);
const Image: React.FC<ButtonIcon> = props => (
  <Button buttonType="icon" {...props}>
    <Icon folderName="icons" iconName={props.iconName} />
  </Button>
);

const buttonComponents = {
  Full,
  Add,
  Image,
};

export default buttonComponents;
