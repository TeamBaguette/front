import type { NextPage } from 'next';
import Image from 'next/image';

const imageEx: NextPage = () => {
  return (
    <>
      <h1>IMAGE SAMPLE PAGE</h1>
      <Image
        width="100%"
        height="100%"
        src={process.env.NEXT_PUBLIC_TEST_IMG_URL + '/200'}
      />
    </>
  );
};

export default imageEx;
