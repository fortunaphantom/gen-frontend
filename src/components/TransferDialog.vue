<template>
  <v-dialog v-model="dialog" width="400" transition="dialog-bottom-transition">
    <v-container class="dialog-body">
      <div class="title">
        Transfer
      </div>
      <div class="description">
        Enter your destination address
      </div>
      <v-text-field clearable label="Destination address" hint="Enter your destination address" v-model="address"></v-text-field>
      <v-btn class="btn-transfer" @click="onTransfer">Transfer</v-btn>
    </v-container>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";

// For v-model databinding
const emit = defineEmits(["update:open"]);
const props = defineProps<{
  open: boolean;
}>();

// internal state
const dialog = ref(props.open);
const address = ref("");

// Watch for changes in the prop and update internal state
watch(
  () => props.open,
  (newValue) => {
    dialog.value = newValue;
  }
);

watch(
  () => dialog.value,
  (newValue) => {
    emit("update:open", dialog.value);
  }
);

function onTransfer() {
  alert(address.value);
}
</script>

<style scoped lang="scss">
.dialog-body {
  background: #111;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  justify-content: center;
  font-weight: bold;
}

.description {
  text-align: center
}

.btn-transfer {
  background-color: #08f;
}
</style>