<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title><a href="/" class="logo">NFT Gallery</a></v-app-bar-title>
    <template v-slot:append>
      <v-btn
        v-if="!!address"
        text="Mint"
        class="mint-button"
        @click="onMint"
        :disabled="minting"
        >{{ minting ? "Minting ..." : "Mint" }}</v-btn
      >
      <v-btn
        :text="address ? trimAddress(address) : 'Connect Wallet'"
        id="menu-activator"
        class="connect-button"
        @click="onConnect"
      ></v-btn>
      <v-menu v-if="!!address" activator="#menu-activator">
        <v-list>
          <v-list-item value="disconnect" @click="onDisconnect">
            <v-list-item-title>Disconnect</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>

  <ConnectDialog v-model:open="openConnect" />
</template>

<script setup lang="ts">
import { getMetadata } from "@/api/getMetadata";
import { trimAddress } from "@/helpers/trimAddress";
import {
  useAccount,
  useDisconnect,
  useSwitchChain,
  useWriteContract,
} from "@wagmi/vue";
import GenNftAbi from "@/contract/GenNft.json";
import { NFT_ADDRESS } from "@/config";
import { toast } from "vue3-toastify";

const { address } = useAccount();
const { disconnect } = useDisconnect();
const { switchChainAsync } = useSwitchChain();
const { writeContractAsync } = useWriteContract();

const openConnect = ref(false);
const minting = ref(false);

function onConnect() {
  if (!address.value) {
    openConnect.value = true;
  }
}

async function onMint() {
  if (address.value) {
    minting.value = true;
    try {
      const res = await getMetadata();
      console.log(res);

      // switch chain
      await switchChainAsync({ chainId: 137 });

      // mint the token
      await writeContractAsync({
        abi: GenNftAbi,
        address: NFT_ADDRESS,
        functionName: "mint",
        args: [res.url],
      });

      toast("Successfully minted", {
        theme: "colored",
        type: "success",
        autoClose: 1000,
        transition: "flip",
        dangerouslyHTMLString: true,
      });
    } catch (ex) {
      toast("Error in minting", {
        theme: "colored",
        type: "error",
        autoClose: 1000,
        transition: "flip",
        dangerouslyHTMLString: true,
      });
      console.error(ex);
    }
    minting.value = false;
  }
}

function onDisconnect() {
  disconnect();
  console.log("disconnect");
}
</script>

<style scoped lang="scss">
.logo {
  text-decoration: none;
  color: white;
}

.mint-button {
  text-transform: unset;
  background: #08f;
  margin: 0 12px 0 0;
}

.connect-button {
  text-transform: unset;
  background: #08f;
}
</style>
