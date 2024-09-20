import { DEFAULT_IMAGE } from "@/config";

export function assetUrl(url: string) {
  if (!url) {
    return DEFAULT_IMAGE;
  }

  if (url.length === 46) {
    return `https://ipfs.io/ipfs/${url}`;
  }

  return url;
}
