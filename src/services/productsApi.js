import axios from "axios";

export const getProducts = async ({ pageParam = 0 }) => {
  const res = await axios.get(
    `https://dummyjson.com/products?limit=10&skip=${pageParam}`
  );
  return res.data;
};