import type { NextPage } from 'next';
import Link from 'next/link';

const PageExamples: NextPage = () => {
  return (
    <>
      <h1>샘플 페이지 링크 리스트</h1>
      <Link href="/example/button">[buttons]</Link>
    </>
  );
};

export default PageExamples;
