export type tNft = {
  contractAddress: string;
  tokenId: string;
  image: string;
  name: string;
  chainId: number;
  description?: string;
  attributes?: {
    display_type: string;
    trait_type: string;
    value: string | number;
  }[];
};
