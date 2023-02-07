import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster toastOptions={{ style: { fontFamily: "nunito" } }} />
    </Layout>
  );
}
