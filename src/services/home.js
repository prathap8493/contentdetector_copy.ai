export const aiDetectionService = async ({ content }) => {
  const res = await fetch(`http://18.205.234.198:8080/?${content}`);
  const data = await res.json();
  console.log(JSON.stringify(data));
  return data;
};
