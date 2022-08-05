import classNames from 'classnames';
import Image from 'next/image';
import IconStyle from 'styles/common/Icon.module.scss';

type Icon = {
  folderName: string;
  iconName: string;
  className?: string; // style을 주기위함 Icon.module.scss에 동일한 클래스로 style 작성
};

const Icon: React.FC<Icon> = ({ folderName, iconName, className }) => {
  return (
    <div
      className={classNames(
        IconStyle.icon,
        className ? IconStyle[className] : '',
      )}
    >
      <Image
        width="100%"
        height="100%"
        src={process.env.NEXT_PUBLIC_IMG_URL + `${folderName}/${iconName}.svg`}
      />
    </div>
  );
};

export default Icon;
