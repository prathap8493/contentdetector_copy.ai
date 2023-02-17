import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster toastOptions={{ style: { fontFamily: "nunito" } }} />
    </Layout>
  );
}
