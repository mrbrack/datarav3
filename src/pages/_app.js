import "@/styles/reset.scss";
import "@/styles/global.scss";
import { Layout } from "@/components";
import Head from "next/head";
import Script from "next/script"
import CookieConsent from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/vlf8tqg.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

      <meta property="og:image" content="/assets/og/og_temp.jpg" key="ogimage" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent enableDeclineButton>This website uses cookies to enhance the user experience.</CookieConsent>
    </>
  );
}
