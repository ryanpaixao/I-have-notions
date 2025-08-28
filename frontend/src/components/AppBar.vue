<script setup>
import { ref, watch } from 'vue';

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

</script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="mdi-menu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <v-btn variant="plain" to="/" class="justify-start">
        <span>Eneagrama</span>
      </v-btn>
    </v-app-bar-title>
    <v-app-bar-nav-icon to="https://www.notion.com">
      <img alt="Notion logo" class="logo m-4" src="@/assets/notion_icon.svg" width="48" height="48" />
    </v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'top' : undefined" temporary>
    <v-list>
      <v-list-item>
        <v-btn variant="text" block to="/tipos" class="justify-start">
          <span>Tipos</span>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn variant="text" block to="/subtipos" class="justify-start">
          <span>Subtipos</span>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn variant="text" block to="/glossario" class="justify-start">
          <span>Glossario</span>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn variant="text" block to="/asa" class="justify-start">
          <span>Asas</span>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>