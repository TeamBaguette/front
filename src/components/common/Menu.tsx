import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menuStyle from 'styles/common/Menu.module.scss';

type Menu = {
  href: string;
  iconName: string;
};

const MenuIcon: React.FC<Menu> = ({ href, iconName }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <div className={menuStyle.menu__link}>
        <div className={menuStyle.menu__image}>
          <Image
            width="100%"
            height="100%"
            src={
              process.env.NEXT_PUBLIC_IMG_URL +
              `icons/menu_${iconName}${
                router.pathname === href ? '_active' : ''
              }.svg`
            }
          />
        </div>
      </div>
    </Link>
  );
};

const Menu = () => {
  return (
    <nav className={menuStyle.menu}>
      <MenuIcon href="/" iconName="todo" />
      <MenuIcon href="/report" iconName="report" />
      <MenuIcon href="/mypage" iconName="mypage" />
    </nav>
  );
};

export default Menu;
