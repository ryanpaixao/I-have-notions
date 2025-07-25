<template>
  <div>
    <h1>Notion Data Viewer</h1>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="item in notionData" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>Created: {{ formatDate(item.created) }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const databaseId = import.meta.env.VITE_DATABASE_ID; // TODO: Replace me!!

export default {
  data() {
    return {
      loading: true,
      notionData: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`http://localhost:5000/api/notion/query-data/${databaseId}`);
      this.notionData = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    }
  }
}
</script>