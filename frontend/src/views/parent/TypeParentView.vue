<script setup>
import { ref, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const databaseId = ref(import.meta.env.VITE_DATABASE_ID);
const baseUri = ref(import.meta.env.VITE_BASE_URI);

const state = reactive({
  notionData: [],
  isLoading: true,
});

const query = "Hierarquia=Tipo";

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUri.value}/api/data/query-data/${databaseId.value}?${query}`);
    state.notionData = response.data.sort((a, b) => a.title >= b.title);
  } catch (error) {
    console.error('Error fetching Notion query data:', error);
    toast("Problem fetching data :(");
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section>
    <div class="notion-link-list">
      <h1 class="text-center mb-7">Tipos</h1>
      <div v-if="state.isLoading">
        <PulseLoader />
      </div>
      <div v-else>
        <div v-for="page in state.notionData" :key="page.id" class="page-card">
          <h2>
            <RouterLink :to="`/page/${page.id}`">
              {{ page.title || 'Untitled' }}
            </RouterLink>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
