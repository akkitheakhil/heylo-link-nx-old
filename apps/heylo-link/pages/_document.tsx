import { HeyloSEOHeader } from "@heylo-link/frontend/heylo-ui-components";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <HeyloSEOHeader
          title="Heylo Link"
          description='description="Simple, Easy to use, Short URLs and personal landing pages'
        />
        <link rel="icon" href="./images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#F2F2F2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
