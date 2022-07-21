import Link from 'next/link';
import menuStyle from 'styles/common/Menu.module.scss';

const Menu = () => {
  return (
    <div className={menuStyle.menu}>
      <Link href="/">todo</Link>
      <Link href="/report">report</Link>
      <Link href="/mypage">mypage</Link>
    </div>
  );
};

export default Menu;
