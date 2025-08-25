<script setup>
import { RouterView } from 'vue-router';
import BottomNav from './components/BottomNav.vue';
</script>

<template>
  <v-app>
    <v-main>
      <v-row class="justify-center">
        <v-col cols="12" class="justify-center">
          <header>
            <img alt="Notion logo" class="logo" src="@/assets/notion_icon.svg" width="125" height="125" />
          </header>
        </v-col>
      </v-row>
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
