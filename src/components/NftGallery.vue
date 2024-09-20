<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto w-100" max-width="1024">
      <v-row>
        <v-col cols="12" md="4" sm="6" v-for="nft in nfts" :key="nft.tokenId">
          <nft-card :nft="nft"></nft-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { getOwnedNfts } from "@/api/getOwnedNfts";
import { tNft } from "@/types/tNft";
import { useAccount } from "@wagmi/vue";
const { address } = useAccount();

const nfts = ref<tNft[]>([]);

onMounted(() => load(address.value));

watch(
  () => address.value,
  (newValue) => load
);

function load(newValue: `0x${string}` | undefined) {
  if (newValue) {
    getOwnedNfts(newValue).then((res) => (nfts.value = res));
  } else {
    nfts.value = [];
  }
}
</script>
