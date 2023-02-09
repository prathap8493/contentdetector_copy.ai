export const aiDetectionService = async ({ content }) => {
  const res = await fetch(`https://cdapi.goom.ai/?${content}`);
  const data = await res.json();
  console.log(JSON.stringify(data));
  return data;
};
