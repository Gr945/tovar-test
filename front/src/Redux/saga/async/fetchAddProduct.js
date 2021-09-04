export const fetchAddProduct = async (payload) => {
  const { name, price, number, color, file } = payload;
  const res = await fetch(process.env.REACT_APP_PRODUCT, {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ name, price, number, color, file }),
  });
  const data = await res.json();
  return data;
};
