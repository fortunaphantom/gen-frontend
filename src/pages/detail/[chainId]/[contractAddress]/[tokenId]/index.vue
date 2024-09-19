<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <v-col md="4" class="d-flex flex-column">
          <div>
            <v-img :src="assetUrl(metadata.image)" class="image"></v-img>
          </div>
          <v-btn
            v-if="(owner?.data as any)?.value?.toLowerCase() === address?.toLowerCase()"
            class="mt-5"
            color="#08f"
            @click="openTransfer = true"
            >Transfer</v-btn
          >
        </v-col>
        <v-col md="8" class="d-flex flex-column ga-2 position-relative">
          <div class="token-id">#{{ tokenId }} {{ metadata?.name }}</div>
          <a :href="getContractLink(chainId, contractAddress)">{{
            contractAddress
          }}</a>
          <div
            v-if="
              !!metadata?.attributes && metadata?.attributes.length > 0
            "
            class="attributes"
          >
            <h5 class="title">Attributes</h5>
            <div v-for="attr in metadata?.attributes" class="attribute">
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

  <TransferDialog
    v-model:open="openTransfer"
    :chain-id="chainId"
    :contract-address="contractAddress"
    :token-id="tokenId"
  />
</template>

<script lang="ts" setup>
import { getContractLink } from "@/helpers/getContractLink";
import { tNft } from "@/types/tNft";
import { useAccount, useReadContract } from "@wagmi/vue";
import Transfer721Abi from "@/contract/Transfer721.json";
import axios from "axios";
import { assetUrl } from "@/helpers/assetUrl";

const route = useRoute();
const chainId = Number((route.params as any).chainId);
const contractAddress = (route.params as any).contractAddress;
const tokenId = (route.params as any).tokenId;

const { address } = useAccount();

const owner = useReadContract({
  abi: Transfer721Abi,
  address: contractAddress,
  functionName: "ownerOf",
  args: [tokenId],
});

const tokenUri = useReadContract({
  abi: Transfer721Abi,
  address: contractAddress,
  functionName: "tokenURI",
  args: [tokenId],
  chainId: chainId,
});

watch<string>(
  () => tokenUri.data.value as string,
  (newValue) => {
    axios
      .get(newValue)
      .then(
        (res) => {
          metadata.value = res.data;
          console.log(res.data);
        },
        (err) => {
          console.error(err);
        }
      )
      .catch((ex) => console.error(ex));
  }
);

const metadata = ref<any>({});
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
