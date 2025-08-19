<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const notionData = ref([]);
const isLoading = ref(true);
const databaseId = ref(import.meta.env.VITE_DATABASE_ID); // TODO: Replace me!!)
const baseUri = ref(import.meta.env.VITE_BASE_URI);
const port = ref(import.meta.env.VITE_PORT);

const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUri.value}:${port.value}/api/notion/query-data/${databaseId.value}`);
    notionData.value = response.data;
  } catch (error) {
    console.error('Error fetching Notion query data:', error);
    toast("Problem fetching data :(");
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="notion-container">
    <h1>Notion Content Viewer</h1>
    <div v-if="isLoading.value">Loading data from Notion...</div>
    <div v-else>
      <div v-for="page in notionData" :key="page.id" class="page-card">
        <h2>
          <RouterLink :to="`/block/${page.id}`">
            {{ page.title || 'Untitled' }}
          </RouterLink>
        </h2>
        <p>Created: {{ formatDate(page.created) }}</p>
      </div>
    </div>
  </div>
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