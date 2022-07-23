import type { NextPage } from 'next';
import Link from 'next/link';
import style from 'styles/common/example.module.scss';

const PageExamples: NextPage = () => {
  return (
    <div className={style.example}>
      <h1>샘플 페이지 링크 리스트</h1>
      <Link href="/example/button">[buttons]</Link>
      <br />
      <Link href="/example/switch">[switch]</Link>
    </div>
  );
};

export default PageExamples;
