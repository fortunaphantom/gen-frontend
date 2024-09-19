import { http, createConfig } from "@wagmi/vue";
import { bsc, mainnet, polygon, sepolia } from "@wagmi/vue/chains";
import { injected, metaMask, safe, walletConnect } from "@wagmi/vue/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia, bsc, polygon],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bsc.id]: http(),
    [polygon.id]: http(),
  },
});
