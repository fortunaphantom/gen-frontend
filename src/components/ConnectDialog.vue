<template>
  <v-dialog v-model="dialog" width="400" transition="dialog-bottom-transition">
    <v-container class="dialog">
      <div class="title">Connect wallet</div>
      <div class="description">Select a wallet to use</div>
      <div class="content">
        <v-btn
          v-for="connector in connectors"
          @click="
            connect({ connector, chainId: 137 });
            dialog = false;
          "
        >
          {{ connector.name }}
        </v-btn>
      </div>
    </v-container>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
import { useConnect } from "@wagmi/vue";

const { connectors, connect } = useConnect();

// For v-model databinding
const emit = defineEmits(["update:open"]);
const props = defineProps<{
  open: boolean;
}>();

// internal state
const dialog = ref(props.open);

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
</script>

<style scoped lang="scss">
.btn-transfer {
  background-color: #08f;
}

.content {
  gap: 12px;
}
</style>
