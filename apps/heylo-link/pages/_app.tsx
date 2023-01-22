import { HeyloSEOHeader } from '@heylo-link/frontend/heylo-ui-components';
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
        <HeyloSEOHeader
          title="Heylo Link"
          description='description="Simple, Easy to use, Short URLs and personal landing pages'
        />
        <link rel="icon" href="./images/favicon.ico" />
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
