export const fetchDropProductSaga = async ({
  startId,
  position1,
  endId,
  position2,
}) => {
  const res = await fetch(process.env.REACT_APP_PRODUCT, {
    method: "PUT",
    // credentials: "include",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ startId, position1, endId, position2 }),
  });
  const data = res.json();
  return data;
};
