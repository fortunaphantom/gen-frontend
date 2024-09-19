<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title><a href="/" class="logo">NFT Gallery</a></v-app-bar-title>

    <template v-slot:append>
      <v-btn text="Connect Wallet"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  text-decoration: none;
  color: white;
}
</style>
