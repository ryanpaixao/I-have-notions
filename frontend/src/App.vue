<script setup>
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
import BottomNav from './components/BottomNav.vue';
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md border">
      <AppBar />
      <v-main class="d-flex justify-center mt-7">
        <v-sheet>
          <RouterView />
        </v-sheet>
      </v-main>
    </v-layout>
    <BottomNav />
  </v-app>
</template>

<style>
@import 'vuetify/styles/main.css';
</style>
