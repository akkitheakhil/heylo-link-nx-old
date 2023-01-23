import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Heylo Link</title>
      </Head>
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;
