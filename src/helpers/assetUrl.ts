export function assetUrl(url: string) {
  if (!url) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s";
  }

  if (url.length === 46) {
    return `https://ipfs.io/ipfs/${url}`;
  }

  return url;
}
