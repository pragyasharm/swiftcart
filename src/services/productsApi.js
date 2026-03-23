import axios from "axios";
import { axiosinstace } from "./axiosInstance";

export const getProducts = async ({ pageParam = 0 }) => {
  const res = await axiosinstace.get(
    `/products?limit=10&skip=${pageParam}`
  );
  return res.data;
};