<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import enneagramImage from '../assets/enneagram.svg';

const databaseId = ref(import.meta.env.VITE_DATABASE_ID); // TODO: Replace me!!)
const baseUri = ref(import.meta.env.VITE_BASE_URI);

const state = reactive({
  notionData: [],
  isLoading: true
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
    <div class="home-view-container">
      <v-col>
        <div v-if="state.isLoading">
          <PulseLoader />
        </div>
        <div v-else class="home-image-container">
          <v-img width="300px" aspect-ratio="16/9" cover :src="enneagramImage" />
        </div>
      </v-col>
    </div>
  </section>
</template>

<style scoped>
.home-view-container {
  display: flex;
  justify-content: center;
}

.home-image-container {
  display: flex;
  justify-content: center;
  max-width: 400px;
}
</style>