<template>
  <v-card>
    <v-layout>
      <v-app-bar theme="dark" app>
        <v-col class="font-weight-bold white--text d-flex">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-app-bar-title class="d-flex align-center">De Rama Admin</v-app-bar-title>
        </v-col>
      </v-app-bar>
      <v-navigation-drawer theme="dark" permanent v-model="drawer">
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-post" title="Список постов" @click="changeSection('blog-list')"></v-list-item>
          <v-list-item prepend-icon="mdi-plus-thick" title="Добавить пост"
            @click="changeSection('add-blog')"></v-list-item>
          <v-list-item prepend-icon="mdi-post" title="Список товаров" @click="changeSection('good-list')"></v-list-item>
          <v-list-item prepend-icon="mdi-plus-thick" title="Добавить товар"
            @click="changeSection('add-good')"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="doLogout" color="blue" variant="outlined">
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main class="py-5 mx-1 main" :key="sectionKey">
        <AdminCardList v-if="section === 'blog-list'" entity-name="blogs" />
        <AdminCardCreate v-else-if="section === 'add-blog'" entity-name="blogs" />
        <AdminCardList v-else-if="section === 'good-list'" entity-name="goods" />
        <AdminCardCreate v-else-if="section === 'add-good'" entity-name="goods" />
        <div v-else>
          {{ section }}
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  doLogout: () => Promise<void>;
}>();

const drawer = ref(true)
const { width } = useWindowSizes();

const isMobile = computed(() => {
  return width.value < 600
})
watch(isMobile, (value) => {
  if (value) {
    drawer.value = false
  }
})

type Section = "blog-list" | "add-blog" | "good-list" | "add-good";
const section = ref<Section>("blog-list");
const sectionKey = ref(1);
const changeSection = (value: Section) => {
  section.value = value;
  sectionKey.value += 1;
  if (isMobile.value) {
    drawer.value = false
  }
};
</script>

<style scoped lang="scss">
.main {
  margin-top: 72px;
}
</style>
