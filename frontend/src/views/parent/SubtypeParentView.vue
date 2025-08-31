<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import ParentLinksListByType from '@/components/ParentLinksListByType.vue';

const databaseId = ref(import.meta.env.VITE_DATABASE_ID);
const baseUri = ref(import.meta.env.VITE_BASE_URI);

const state = reactive({
  notionData: [],
  isLoading: true,
});

const query = "Hierarquia=Subtipo";
const pageTitle = "Subtipos"

onMounted(async () => {
  try {
    const response = await axios.get(`${baseUri.value}/api/data/query-data/${databaseId.value}?${query}`);
    state.notionData = response.data;
  } catch (error) {
    console.error('Error fetching Notion query data:', error);
    toast("Problem fetching data :(");
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <ParentLinksListByType :pageTitle="pageTitle" :isLoading="state.isLoading" :notionData="state.notionData" />
</template>
