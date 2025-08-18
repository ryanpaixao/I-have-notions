<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <v-app width="100%">
    <v-container width="100%">
      <v-row class="justify-center">
        <header>
          <img alt="Notion logo" class="logo" src="@/assets/notion_icon.svg" width="125" height="125" />
        </header>
      </v-row>
      <v-row>
        <section>
          <div class="">
            <RouterView />
          </div>
        </section>
      </v-row>
    </v-container>
  </v-app>
</template>

<style></style>
