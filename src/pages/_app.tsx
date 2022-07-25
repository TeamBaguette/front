import 'styles/_reset.scss';
import 'styles/_globals.scss';
import 'styles/_variables.scss';
import type { AppProps } from 'next/app';
import Menu from 'src/components/common/Menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Menu />
    </>
  );
}

export default MyApp;
