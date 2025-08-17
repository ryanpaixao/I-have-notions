<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const notionData = ref([]);
const loading = ref(true);
const databaseId = ref(import.meta.env.VITE_DATABASE_ID); // TODO: Replace me!!)

const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

onMounted(async () => {
  console.log('updated!!');
  try {
    const response = await axios.get(`http://localhost:5000/api/notion/query-data/${databaseId.value}`);
    notionData.value = response.data;
  } catch (error) {
    console.error('Error fetching Notion data:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="notion-container">
    <h1>Notion Content Viewer</h1>
    <div v-if="loading">Loading data from Notion...</div>
    <div v-else>
      <div v-for="page in notionData" :key="page.id" class="page-card">
        <h2>
          <a :href="page.url || ''">{{ page.title || 'Untitled' }}</a>
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