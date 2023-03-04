import axios from "axios";

export const aiDetectionService = async ({ content }) => {
  console.log(content);
  const res = await axios.post(
    `http://3.83.215.200:8080/api/v1/content/detect`,

    {
      content,
    },
    {
      Headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};
