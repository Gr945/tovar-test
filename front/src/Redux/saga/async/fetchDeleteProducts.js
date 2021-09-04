export const fetchDeleteProducts = async (id) => {
  const res = await fetch(process.env.REACT_APP_PRODUCT, {
    method: "DELETE",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data;
};
