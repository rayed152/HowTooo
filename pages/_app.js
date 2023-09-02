import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { SSRProvider } from "react-bootstrap";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Head>
          <title>HowToo</title>
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </SSRProvider>
  );
}
