<template>
  <v-container class="nft-card">
    <a
      class="image-wrapper"
      :href="`/detail/${nft.chainId}/${nft.contractAddress}/${nft.tokenId}`"
    >
      <img
        v-if="!nft.metadata?.image?.toLowerCase().includes('.mp4')"
        :src="assetUrl(nft.metadata?.image || '')"
        :alt="nft.metadata?.name"
        @error="onLoadError"
        class="img"
        
      ></img>
      <video v-else :src="assetUrl(nft.metadata?.image || '')" class="img"></video>
    </a>
    <div class="info">
      <div>
        {{ trimString(`${nft.metadata?.name || ""} (#${nft.tokenId})`, 30) }}
      </div>
      <a :href="getContractLink(nft.chainId, nft.contractAddress)">{{
        trimAddress(nft.contractAddress)
      }}</a>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { tNft } from "@/types/tNft";
import { getContractLink } from "@/helpers/getContractLink";
import { trimAddress } from "@/helpers/trimAddress";
import { trimString } from "@/helpers/trimString";
import { assetUrl } from "@/helpers/assetUrl";

defineProps<{
  nft: tNft;
}>();

function onLoadError(event: any) {
  event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s";
}
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
    aspect-ratio: 1;
  }

  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }
}

.info {
  padding: 10px;
}
</style>
