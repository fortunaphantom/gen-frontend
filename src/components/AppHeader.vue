<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title><a href="/" class="logo">NFT Gallery</a></v-app-bar-title>
    <template v-slot:append>
      <v-btn :text="address ? trimAddress(address) : 'Connect Wallet'" id="menu-activator" class="connect-button" @click="onConnect"></v-btn>
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
import { trimAddress } from "@/helpers/trimAddress";
import { useAccount, useDisconnect } from "@wagmi/vue";
const { address } = useAccount();
const { disconnect } = useDisconnect();

const openConnect = ref(false);

function onConnect() {
  console.log({address: address.value});
  if (!address.value) {
    openConnect.value = true;
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

.connect-button {
  text-transform: unset;
  background: #08f;
}
</style>
