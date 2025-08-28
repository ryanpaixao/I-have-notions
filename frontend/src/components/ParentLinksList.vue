<script setup>
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
  pageTitle: String,
  isLoading: Boolean,
  notionData: Object,
});
</script>

<template>
  <section>
    <div class="notion-link-list mb-14">
      <h1 class="text-center mb-7">{{ props.pageTitle }}</h1>
      <div v-if="props.isLoading" class="text-center">
        <PulseLoader />
      </div>
      <div v-else>
        <div v-for="page in props.notionData" :key="page.id">
          <v-btn variant="plain">
            <RouterLink :to="`/page/${page.id}`">
              {{ page.title || '"Sem título"' }}
            </RouterLink>
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>
