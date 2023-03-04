import axios from "axios";

export const aiDetectionService = async ({ content }) => {
  console.log(content);
  const res = await axios.post(
    `https://cdapi.goom.ai/api/v1/content/detect`,

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
