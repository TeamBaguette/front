import type { NextPage } from 'next';
import Link from 'next/link';

const PageTodo: NextPage = () => {
  return (
    <>
      <h1>메인 (TODO)</h1>
      <Link href="/example">[examples page link]</Link>
    </>
  );
};

export default PageTodo;
