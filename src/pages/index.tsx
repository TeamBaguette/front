import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <div>홈</div>
      <Link href="/example/button">button style sample page</Link>
    </>
  );
};

export default Home;
