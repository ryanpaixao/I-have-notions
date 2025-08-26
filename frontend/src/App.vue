<script setup>
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
import BottomNav from './components/BottomNav.vue';
</script>

<template>
  <v-app>
    <v-main>
      <AppBar />
      <v-row class="w-100" align="stretch">
        <v-col cols="12">
          <RouterView />
        </v-col>
      </v-row>
    </v-main>
    <BottomNav />
  </v-app>
</template>

<style>
@import 'vuetify/styles/main.css';
</style>
