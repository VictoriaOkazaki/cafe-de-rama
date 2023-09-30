<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" permanent>
        <v-list color="transparent">
          <v-list-item
            prepend-icon="mdi-post"
            title="Список постов"
            @click="changeSection('blog-list')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-plus-thick"
            title="Добавить пост"
            @click="changeSection('add-blog')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-post"
            title="Список товаров"
            @click="changeSection('good-list')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-plus-thick"
            title="Добавить товар"
            @click="changeSection('add-good')"
          ></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="doLogout" color="blue" variant="outlined">
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main class="py-5 mx-1" :key="sectionKey">
        <AdminCardList v-if="section === 'blog-list'" entity-name="blogs" />
        <AdminCardCreate
          v-else-if="section === 'add-blog'"
          entity-name="blogs"
        />
        <AdminCardList
          v-else-if="section === 'good-list'"
          entity-name="goods"
        />
        <AdminCardCreate
          v-else-if="section === 'add-good'"
          entity-name="goods"
        />
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

type Section = "blog-list" | "add-blog" | "good-list" | "add-good";
const section = ref<Section>("blog-list");
const sectionKey = ref(1);
const changeSection = (value: Section) => {
  section.value = value;
  sectionKey.value += 1;
};
</script>

<style scoped></style>
