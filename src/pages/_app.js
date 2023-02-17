import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import "react-quill/dist/quill.snow.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster toastOptions={{ style: { fontFamily: "nunito" } }} />
    </Layout>
  );
}
