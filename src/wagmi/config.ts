import { http, createConfig } from "@wagmi/vue";
import { base, mainnet, sepolia } from "@wagmi/vue/chains";
import { injected, metaMask, safe, walletConnect } from "@wagmi/vue/connectors";

const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [mainnet, sepolia, base],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
  },
});
