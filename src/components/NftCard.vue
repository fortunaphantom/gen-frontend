<template>
  <v-container class="nft-card">
    <a class="image-wrapper" :href="`/detail/${nft.chainId}/${nft.contractAddress}/${nft.tokenId}`">
      <v-img
        :src="nft.image"
        :alt="nft.name"
        aspect-ratio="1/1"
        cover
        class="img"
      ></v-img>
    </a>
    <div class="info">
      <div>{{ nft.name }} (#{{ nft.tokenId }})</div>
      <a :href="getContractLink(nft.chainId, nft.contractAddress)">{{ nft.contractAddress }}</a>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { tNft } from "@/types/tNft";
import { getContractLink } from "@/helpers/getContractLink";

defineProps<{
  nft: tNft;
}>();
</script>

<style scoped lang="scss">
.nft-card {
  display: flex;
  flex-direction: column;
  background: #222;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;

  .image-wrapper {
    overflow: hidden;
    cursor: pointer;
  }

  .img:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
}

.info {
  padding: 10px;
}
</style>
