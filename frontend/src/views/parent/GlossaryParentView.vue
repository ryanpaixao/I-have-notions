<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import ParentLinksList from '@/components/ParentLinksList.vue';

const databaseId = ref(import.meta.env.VITE_DATABASE_ID);
const baseUri = ref(import.meta.env.VITE_BASE_URI);

const state = reactive({
  notionData: [],
  isLoading: true,
});

const query = "Hierarquia=Categoria%20de%20Subtipos";
const pageTitle = "Glossario"

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
  <ParentLinksList :pageTitle="pageTitle" :isLoading="state.isLoading" :notionData="state.notionData" />
</template>
