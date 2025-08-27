<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Components
import NotionPageSection from '@/components/NotionPageSection.vue';
import NotionBlock from '@/components/NotionBlock.vue';

const route = useRoute();
const pageId = route.params.page_id;
const baseUri = ref(import.meta.env.VITE_BASE_URI);

const state = reactive({
  pageTitle: "",
  sections: [],
  blocks: [],
  isLoading: true
});

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUri.value}/api/agg/${pageId}`);

    state.pageTitle = response.data?.page?.pageTitle;
    state.sections = response.data?.page?.sections;
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
  <v-sheet class="child-page-container">
    <h2 class="text-center mt-4 mb-7">
      {{ state.pageTitle }}
    </h2>
    <div v-if="state.isLoading" class="text-center">
      <PulseLoader />
    </div>
    <div v-else>
      <v-card v-for="(section, index) in state.sections" :key="index" class="notion-page notion-page-section">
        <NotionPageSection :section="section" />
      </v-card>
      <v-divider full-width></v-divider>
      <div v-for="(block, index) in state.blocks" :key="index" class="notion-page notion-block">
        <NotionBlock :block="block" />
      </div>
    </div>
  </v-sheet>
</template>

<style scoped>
.child-page-container {
  border-radius: 1%;
  margin-bottom: 40px;
  padding: 16px;
}

.notion-page-section {
  margin: 21px 32px;
  align-items: center;
}

.notion-block {
  margin: 21px 56px;
}
</style>