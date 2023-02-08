import gpt from "../assests/svgs/gpt.svg";
import ai from "../assests/svgs/ai.svg";
import pla from "../assests/svgs/pla.svg";
import avatar1 from "../assests/png/avatar1.png";
import avatar2 from "../assests/png/avatar2.png";
import avatar3 from "../assests/png/avatar3.png";
export const features = [
  {
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can achieve in features. We will be able to detect any ChatGPT 3 written content and provides a relevant score",
    title: "Detect ChatGPT Content",
  },
  {
    img: ai,
    desc: "Contentdetector.ai not just detects AI content but also detect plagiarism from the writers give what it can be done",
    title: "Detect Plagiarised Content",
  },
  {
    img: pla,
    desc: "Most of the AI writers such as Jasper or copy.ai or that exist today currently use openai’s GPT 3. Our detector will be able to detect content written using any of the software",
    title: "Detect Content by AI Writing Software",
  },
];

export const use_cases = [
  {
    id: 1,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 2,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 3,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 4,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 5,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
  {
    id: 6,
    img: gpt,
    desc: "ChatGPT which is based on OpenAI GPT 3.5 is a big leap forward in terms of what AI can.",
    title: "Detect ChatGPT Content",
  },
];

export const testimonial_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  // centerMode: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    rating: "5",
    avatar: avatar1,
    user: "Alissa Peterson",
    desc: "This tool has been a lifesaver for my blog. It’s easy to use and has helped me catch instances of AI-Generated content from my writers and improve the overall quality of my content",
  },
  {
    id: 2,
    rating: "4",
    avatar: avatar2,
    user: "Anna Clarck",
    desc: "Whether I’m checking a single paragraph or a single URL or an entire website, contentdetector.ai covers everything",
  },
  {
    id: 3,
    rating: "4.5",
    avatar: avatar3,
    user: "Olindra Gotham",
    desc: "It’s amazing that tools detect both plagiarised content as well AI content. I would highly recommend for anyone which is serious about production high quality original content",
  },
];

export const faq = [
  {
    id: 1,
    title: "GPT 3 Content Detector",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry in print and typesetting industry today  and isvirt",
  },
  {
    id: 2,
    title: "ChatGPT Content Detector",
    desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry in print and typesetting industry today  and isvirt",
  },
  {
    id: 3,
    title: "Jasper AI Content Detector",
    desc: "Use this tool to detect the AI content from one of the most popular AI tool Jasper",
  },
  {
    id: 4,
    title: "Can it Detect AI content from other tools such as Copy.AI",
    desc: "Use this tool to detect the AI content from one of the most popular AI tool Jasper",
  },
  {
    id: 5,
    title: "Plagiarism Detector and Checker",
    desc: "Currently, the tool does not detect directly plagiarised content from various sources.  However, we are planning to add the plagiarism capabilities very soon to this tool.",
  },
];
