<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <v-col md="4" class="d-flex flex-column">
          <div>
            <v-img :src="nft.metadata?.image" class="image"></v-img>
          </div>
          <v-btn class="mt-5" color="#08f" @click="openTransfer = true"
            >Transfer</v-btn
          >
        </v-col>
        <v-col md="8" class="d-flex flex-column ga-2 position-relative">
          <div class="token-id">#{{ nft.tokenId }} {{ nft.metadata?.name }}</div>
          <a :href="getContractLink(nft.chainId, nft.contractAddress)">{{
            nft.contractAddress
          }}</a>
          <div
            v-if="!!nft.metadata?.attributes && nft.metadata?.attributes.length > 0"
            class="attributes"
          >
            <h5 class="title">Attributes</h5>
            <div v-for="attr in nft.metadata?.attributes" class="attribute">
              <div class="trait">{{ attr.trait_type }}</div>
              <div class="value">{{ attr.value }}</div>
            </div>
          </div>
          <v-btn
            icon="mdi-chevron-left"
            size="30"
            href="/"
            class="btn-back"
          ></v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>

  <TransferDialog v-model:open="openTransfer" />
</template>

<script lang="ts" setup>
import { getContractLink } from "@/helpers/getContractLink";
import { tNft } from "@/types/tNft";

const route = useRoute();
const chainId = (route.params as any).chainId;
const contractAddress = (route.params as any).contractAddress;
const tokenId = (route.params as any).tokenId;

const nft: tNft = {
  tokenId: "1",
  contractAddress: "ContractAddress",
  chainId: 1,
  metadata: {
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg",
    name: "Name",
    description:
      "Friendly OpenSea Creature that enjoys long swims in the ocean.",
    attributes: [
      {
        display_type: "string",
        trait_type: "Base",
        value: "Starfish",
      },
      {
        display_type: "number",
        trait_type: "Level",
        value: 5,
      },
      {
        display_type: "string",
        trait_type: "Personality9",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality8",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality7",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality6",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality5",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality4",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality3",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality2",
        value: "Sad",
      },
      {
        display_type: "string",
        trait_type: "Personality1",
        value: "Sad",
      },
    ],
  },
};

const openTransfer = ref(false);
</script>

<style scoped lang="scss">
.image {
  border-radius: 12px;
}

.attributes {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #1a1a1a;
  padding: 12px;
  border-radius: 16px;

  .title {
    font-size: 16px;
  }

  .attribute {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    background: #222;
    border-radius: 16px;
  }
}
.btn-back {
  position: absolute;
  top: 20px;
  right: 12px;
}
</style>
