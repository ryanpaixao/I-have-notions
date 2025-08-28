<script setup>
import { RouterView } from 'vue-router';
import AppBar from './components/navigation/AppBar.vue';
import BottomNav from './components/navigation/BottomNav.vue';
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md border">
      <AppBar />
      <v-main class="d-flex justify-center mt-7">
        <RouterView />
      </v-main>
      <BottomNav />
    </v-layout>
  </v-app>
</template>

<style>
@import 'vuetify/styles/main.css';
</style>
