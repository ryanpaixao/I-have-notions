<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Components
import NotionPageSection from '@/components/NotionPageSection.vue';

const route = useRoute();
const pageId = route.params.page_id;
const baseUri = ref(import.meta.env.VITE_BASE_URI);

const state = reactive({
  pageTitle: "", // TODO: auto populate me!!
  sections: [],
  isLoading: true
});

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUri.value}/api/page/${pageId}`);

    state.pageTitle = response.data?.pageTitle;
    state.sections = response.data?.sections;
  } catch (error) {
    console.error('Error fetching Notion block data:', error);
    toast("Problem fetching data :(");
  } finally {
    state.isLoading = false;
  }
});
</script>

<template class="w-100">
  <div class="mb-14 w-100">
    <h2 class="text-center mb-7">
      {{ state.pageTitle }}
    </h2>
    <div v-if="state.isLoading" class="text-center">
      <PulseLoader />
    </div>
    <div v-else class="w-100">
      <div v-for="(section, index) in state.sections" :key="index" class="w-100">
        <NotionPageSection :section="section" />
      </div>
    </div>
  </div>
</template>