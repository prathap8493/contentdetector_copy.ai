import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomeHeading from "@/components/home/HomeHeading";
import Playground from "@/components/home/Playground";
import Features from "@/components/home/Features";
import OurMotive from "@/components/home/OurMotive";
import SectionFour from "@/components/home/SectionFour";
import UseCases from "@/components/home/UseCases";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Content Detector - Detect ChatGPT Plagiarism</title>
        <meta
          name="description"
          content="ContentDetector.AI is a free AI and ChatGPT plagiarism detector with a word counter for bloggers academicians"
        />
        <meta
          name="keywords"
          content="AI Content Detector, Chat GPT Plagiarism Detector, Word Counter"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomeHeading styles={styles} />
        <Playground styles={styles} />
        {/* <Features styles={styles} /> */}

        <OurMotive styles={styles} />

        {/* <UseCases styles={styles} /> */}
        <Faq styles={styles} />
      </div>
    </>
  );
}
