<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

// Components
import NotionBlock from '@/components/NotionBlock.vue';

const route = useRoute();
const blockId = route.params.block_id;
const baseUri = ref(import.meta.env.VITE_BASE_URI);
const port = ref(import.meta.env.VITE_PORT);

const pageTitle = "Replace me!!"; // TODO: Replace w/actual page title

const state = reactive({
  blocks: [],
  isLoading: true
});

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUri.value}:${port.value}/api/notion/block/${blockId}`);
    state.blocks = response.data;
  } catch (error) {
    console.error('Error fetching Notion block data:', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section>
    <div class="">
      <h2 class="text-center mb-7">
        {{ pageTitle }}
      </h2>
      <div v-if="state.isLoading" class="text-center">
        ... Loading
      </div>
      <div v-else class="">
        <div v-for="(block, index) in state.blocks" :key="index">
          <NotionBlock :block="block" />
        </div>
      </div>
    </div>
  </section>
</template>