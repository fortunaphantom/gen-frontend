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
      ></v-btn>
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
import { useAccount, useDisconnect } from "@wagmi/vue";
const { address } = useAccount();
const { disconnect } = useDisconnect();

const openConnect = ref(false);

function onConnect() {
  if (!address.value) {
    openConnect.value = true;
  }
}

async function onMint() {
  if (address.value) {
    try {
      const res = await getMetadata();
      console.log(res);
    } catch (ex) {
      console.error(ex);
    }
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
