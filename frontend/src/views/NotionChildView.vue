<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Components
import NotionBlock from '@/components/NotionBlock.vue';

const route = useRoute();
const blockId = route.params.block_id;
const baseUri = ref(import.meta.env.VITE_BASE_URI);
const port = ref(import.meta.env.VITE_PORT);

const state = reactive({
  pageTitle: "",
  blocks: [],
  isLoading: true
});

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUri.value}:${port.value}/api/notion/block/${blockId}`);

    state.pageTitle = response.data?.title;
    state.blocks = response.data?.blocks;
  } catch (error) {
    console.error('Error fetching Notion block data:', error);
    toast("Problem fetching data :(");
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section>
    <div class="">
      <h2 class="text-center mb-7">
        {{ state.pageTitle }}
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