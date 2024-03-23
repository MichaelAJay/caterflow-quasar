<template>
  <div>
    <q-btn
      color="{ isPrimary ? 'black' : 'white' }"
      flat
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  label: String,
  isPrimary: Boolean,
  handleClick: () => {},
});
</script>
