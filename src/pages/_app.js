import "@/styles/reset.scss";
import "@/styles/global.scss";
import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />;
      </main>
    </Layout>
  );
}
