import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Icon.png" type="image/png" sizes="24x24" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
