<template>
  <v-dialog v-model="dialog" width="400" transition="dialog-bottom-transition">
    <v-container class="dialog">
      <div class="title">Transfer</div>
      <div class="description">Enter your destination address</div>
      <v-text-field
        clearable
        label="Destination address"
        hint="Enter your destination address"
        v-model="toAddress"
      ></v-text-field>
      <v-btn class="btn-transfer" @click="onTransfer" :disabled="transfering">{{
        transfering ? "Transfering ..." : "Transfer"
      }}</v-btn>
    </v-container>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
import { useWriteContract, useAccount, useSwitchChain } from "@wagmi/vue";
import Transfer721Abi from "@/contract/Transfer721.json";
import { ethers } from "ethers";
import { toast } from "vue3-toastify";

const { address } = useAccount();
const { writeContractAsync } = useWriteContract();
const { switchChainAsync } = useSwitchChain();

// For v-model databinding
const emit = defineEmits(["update:open"]);
const props = defineProps<{
  open: boolean;
  contractAddress: `0x${string}`;
  chainId: number;
  tokenId: string;
}>();

// internal state
const dialog = ref(props.open);
const toAddress = ref("");
const transfering = ref(false);

// Watch for changes in the prop and update internal state
watch(
  () => props.open,
  (newValue) => {
    dialog.value = newValue;
  }
);

watch(dialog, (newValue) => {
  emit("update:open", newValue);
});

async function onTransfer() {
  // check wallet connect
  if (!address.value) {
    toast("Please connect wallet", {
      theme: "colored",
      type: "error",
      autoClose: 1000,
      transition: "flip",
      dangerouslyHTMLString: true,
    });
    return;
  }

  // validate input
  if (!ethers.isAddress(toAddress.value)) {
    toast("Please input correct address", {
      theme: "colored",
      type: "error",
      autoClose: 1000,
      transition: "flip",
      dangerouslyHTMLString: true,
    });
    return;
  }

  transfering.value = true;
  try {
    // switch chain
    await switchChainAsync({ chainId: props.chainId });

    console.log("Switched chain");
    console.log({
      address: props.contractAddress,
      functionName: "transferFrom",
      args: [address.value, toAddress.value, props.tokenId],
    });

    await writeContractAsync({
      abi: Transfer721Abi,
      address: props.contractAddress,
      functionName: "transferFrom",
      args: [address.value, toAddress.value, props.tokenId],
    });
    console.log("Transferred token");
  } catch (ex) {
    toast("Can't transfer the token", {
      theme: "colored",
      type: "error",
      autoClose: 1000,
      transition: "flip",
      dangerouslyHTMLString: true,
    });
    console.log("Error in transferring token");
    console.error(ex);
  }
  transfering.value = false;
}
</script>

<style scoped lang="scss">
.btn-transfer {
  background-color: #08f;
}
</style>
