import "@/styles/reset.scss";
import "@/styles/global.scss";
import { Layout } from "@/components";
import Head from "next/head";

import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "@/lib/gtag.js"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
