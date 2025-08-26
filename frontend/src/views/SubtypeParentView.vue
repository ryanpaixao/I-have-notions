<script setup>
import { ref, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const databaseId = ref(import.meta.env.VITE_DATABASE_ID);
const baseUri = ref(import.meta.env.VITE_BASE_URI);

const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

const state = reactive({
  notionData: [],
  isLoading: true,
});

const query = "Hierarquia=Subtipo";

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
    <div class="notion-container mb-14">
      <h1 class="text-center mb-7">Subtipo</h1>
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
          <p>Created: {{ formatDate(page.created) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-card {
  border: 1px solid #285826;
  color: #277131;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgb(63, 66, 64);
}
</style>