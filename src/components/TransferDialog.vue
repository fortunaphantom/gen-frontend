<template>
  <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition">
    <v-card
      max-width="400"
      prepend-icon="mdi-update"
      text="Please input the wallet address"
      title="Transfer"
    >
    </v-card>

  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';

// For v-model databinding
const emit = defineEmits(['update:open']);
const props = defineProps<{
  open: boolean;
}>();

// internal state
const dialog = ref(props.open);

// Watch for changes in the prop and update internal state
watch(() => props.open, (newValue) => {
  dialog.value = newValue;
});

watch(() => dialog.value, (newValue) => {
  emit('update:open', dialog.value);
});

</script>
