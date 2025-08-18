<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

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
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-center">
        {{ pageTitle }}
      </h2>
      <div v-if="state.isLoading" class="text-center">
        ... Loading
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(block, index) in state.blocks" :key="index">
          <div class="">
            <p>
              {{ block }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>