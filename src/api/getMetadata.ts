import { tNft } from "@/types/tNft";
import axios from "axios";

export const getMetadata = async () => {
  const res = await axios.post<{ url: string }>(
    `${import.meta.env.VITE_API_URL}/upload`
  );
  return res.data;
};
