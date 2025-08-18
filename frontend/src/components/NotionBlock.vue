<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  block: String
});
</script>

<template>
  <div class="mb-5">
    <p>{{ props.block }}</p>
  </div>
</template>