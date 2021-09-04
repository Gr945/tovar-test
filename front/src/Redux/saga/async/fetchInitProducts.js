export const fetchInitProducts = async () => {
  const res = await fetch(process.env.REACT_APP_PRODUCT);
  const data = res.json();
  return data;
};
