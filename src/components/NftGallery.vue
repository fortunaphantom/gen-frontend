<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <v-col md="4" v-for="nft in nfts" :key="nft.tokenId">
          <nft-card :nft="nft"></nft-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { tNft } from '@/types/tNft';

const nfts: tNft[] = [
  {
    contractAddress: "ContractAddress",
    tokenId: "1",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg",
    name: "Name",
    chainId: 1,
  },
  {
    contractAddress: "ContractAddress",
    tokenId: "2",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg",
    name: "Name",
    chainId: 1,
  },
  {
    contractAddress: "ContractAddress",
    tokenId: "3",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg",
    name: "Name",
    chainId: 1,
  },
  {
    contractAddress: "ContractAddress",
    tokenId: "4",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg",
    name: "Name",
    chainId: 1,
  },
];
</script>
