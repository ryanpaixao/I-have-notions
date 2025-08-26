<script setup>
import { ref, watch } from 'vue';

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

// const items = [
//   {
//     title: 'Foo',
//     value: "<v-btn>blah</v-btn>",
//   },
//   {
//     title: 'Bar',
//     value: 'bar',
//   },
//   {
//     title: 'Fizz',
//     value: 'fizz',
//   },
//   {
//     title: 'Buzz',
//     value: 'buzz',
//   },
// ]

</script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="mdi-menu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <VAppBarTitle>
      <v-btn variant="plain" block to="/" class="justify-start">
        <span>Eneagrama</span>
      </v-btn>
    </VAppBarTitle>
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
    </v-list>
  </v-navigation-drawer>
</template>