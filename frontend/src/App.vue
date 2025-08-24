<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <VApp class="w-100" full-width>
    <VContainer fluid>
      <VRow class="justify-center">
        <VCol cols="12" class="justify-center">
          <header>
            <img alt="Notion logo" class="logo" src="@/assets/notion_icon.svg" width="125" height="125" />
          </header>
        </VCol>
      </VRow>
      <VRow class="w-100" align="stretch">
        <VCol cols="12">
          <RouterView />
        </VCol>
      </VRow>
    </VContainer>
  </VApp>
</template>

<style>
@import 'vuetify/styles/main.css';
</style>
