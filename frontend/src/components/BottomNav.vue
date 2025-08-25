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
  <v-bottom-navigation grow>
    <v-btn value="back" @click="goBack">
      <VIcon>mdi-arrow-left-circle</VIcon>
    </v-btn>
    <v-btn value="home" to="/">
      <VIcon icon="mdi-home" />
    </v-btn>
    <v-btn value="forward" @click="goForward">
      <VIcon>mdi-arrow-right-circle</VIcon>
    </v-btn>
  </v-bottom-navigation>
</template>