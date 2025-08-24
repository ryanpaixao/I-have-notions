<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  section: Array
});
const title = props.section[0];
const textContent = props.section[1];
</script>

<template>
  <VExpansionPanels class="w-100">
    <VExpansionPanel :key="title">
      <VExpansionPanelTitle>
        <b>{{ title }}</b>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        {{ textContent }}
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>