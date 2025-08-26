<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  if (window.history.state.back) {
    router.back();
  } else {
    router.push('/');
  }
};
const goForward = () => {
  if (window.history.state.forward) {
    router.forward();
  }
};
</script>

<template>
  <v-bottom-navigation fixed app>
    <v-btn value="back" @click="goBack">
      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>
    <v-btn value="home" to="/">
      <v-icon icon="mdi-home" />
    </v-btn>
    <v-btn value="forward" @click="goForward">
      <v-icon>mdi-arrow-right-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>