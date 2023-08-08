import "@/styles/globals.css";
import store from "@/store";
import { Provider } from "react-redux";
import Layout from "@/components/layout";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
