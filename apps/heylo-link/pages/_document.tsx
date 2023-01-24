import { HeyloSEOHeader } from "@heylo-link/frontend/heylo-ui-components";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <HeyloSEOHeader
          title="Heylo Link"
          description='description="Simple, Easy to use, Short URLs and personal landing pages'
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
