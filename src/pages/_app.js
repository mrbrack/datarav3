import "@/styles/reset.scss";
import "@/styles/global.scss";
import { Layout } from "@/components";
import Head from "next/head";
import Script from "next/script"
import CookieConsent from "react-cookie-consent";
import { Analytics } from '@vercel/analytics/react';
import {DefaultSeo} from 'next-seo';

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
                title="datarav3 - creative technology & generative art"
                description="I use computer programming in creative and artistic contexts. Based in Bristol, UK."
                openGraph={{
                    type: 'website',
                    locale: 'en_gb',
                    url: 'https://www.datarav3.art',
                    siteName: 'datarav3',
                    images: {
                      url: 'https://www.datarav3.art/assets/og/og_temp.jpg',
                      width: 1200,
                      height: 630,
                      alt: 'the word datarav3 placed over a grid background coloured using grey, pink and green',
                  },
                }}
                twitter={{
                    handle: '@datarav3',
                    site: 'datarav3.art',
                    cardType: 'summary',
                }}
            />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent enableDeclineButton>This website uses cookies to enhance the user experience.</CookieConsent>
      <Analytics />
    </>
  );
}
