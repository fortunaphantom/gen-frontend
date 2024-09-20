<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto w-100"
      max-width="1024"
    >
      <v-row v-if="loading || nfts.length > 0">
        <v-col v-if="loading" cols="12" md="4" sm="6" v-for="n in 9" :key="n">
          <v-skeleton-loader
            :loading="loading"
            height="240"
            type="image, list-item-two-line"
          >
            <v-responsive>
              <v-img
                :src="DEFAULT_IMAGE"
                class="rounded-lg mb-2"
                height="184"
                cover
              ></v-img>

              <v-list-item
                subtitle="subtitle"
                title="title"
                class="px-0"
              ></v-list-item>
            </v-responsive>
          </v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="4" sm="6" v-for="nft in nfts" :key="nft.tokenId">
          <nft-card :nft="nft"></nft-card>
        </v-col>
      </v-row>
      <div v-else class="no-nfts">
        {{ !address ? "Please connect wallet" : "You don't have any nfts" }}
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { getOwnedNfts } from "@/api/getOwnedNfts";
import { DEFAULT_IMAGE } from "@/config";
import { tNft } from "@/types/tNft";
import { useAccount } from "@wagmi/vue";
const { address } = useAccount();

const nfts = ref<tNft[]>([]);
const loading = ref(false);

onMounted(() => load(address.value));

watch(address, (newValue) => load(newValue));

function load(newValue: `0x${string}` | undefined) {
  console.log({ newValue });
  if (newValue) {
    loading.value = true;
    getOwnedNfts(newValue)
      .then((res) => {
        nfts.value = res;
      })
      .finally(() => {
        loading.value = false;
      });
  } else {
    nfts.value = [];
  }
}
</script>

<style scoped lang="scss">
.no-nfts {
  text-align: center;
}
</style>
