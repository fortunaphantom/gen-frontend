import { tNft } from "@/types/tNft";
import axios from "axios"

export const getOwnedNfts = async (address: string) => {
  const res = await axios.get<tNft[]>(`${import.meta.env.VITE_API_URL}/get-owned-nfts?address=${address}`);
  return res.data;
}
