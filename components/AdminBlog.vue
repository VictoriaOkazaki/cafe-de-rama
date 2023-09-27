<template>
  <div v-show="!editingBlog">
    <v-row class="cafe__list mx-2">
      <v-col v-for="blog in currentItems" :key="blog.id" md="4" xl="4">
        <v-card class="cafe__card">
          <v-img height="100" :src="blog.mainFile.src"></v-img>

          <v-card-title>
            {{ blog.title }}
          </v-card-title>

          <v-card-text>
            <p>{{ blog.text }}</p>
            <b>Date: {{ utcToUiDateFormat(blog.date) }}</b>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="startEditing(blog)">Edit</v-btn>
            <v-btn color="red" @click="deleteBlog(blog)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-btn
      v-show="canIncreaseShowCount"
      block
      @click="increaseCurShowCount"
      color="blue"
      variant="outlined"
      class="mt-8"
    >
      Load more
    </v-btn>
  </div>

  <AdminBlogEditor
    v-if="editingBlog"
    :cancel="() => (editingBlog = null)"
    :start-blog="editingBlog"
    :save-changes="saveEditingBlog"
  />
</template>

<script setup lang="ts">
import { BlogCard, NewFiles, ZodBlogAddWithoutFile } from "~~/types";
import { deleteBlogApi, editBlogApi } from "~~/api";
import { utcToUiDateFormat } from "~/server/modules/date";

const itemsCount = computed(() => 6);
const pageNum = 1;

const { currentItems, canIncreaseShowCount, increaseCurShowCount } =
  useShowMoreRequest<BlogCard>(itemsCount, pageNum, "/api/blogs");

await increaseCurShowCount();

const deleteBlog = async (blog: BlogCard) => {
  await deleteBlogApi(blog);
  currentItems.value = currentItems.value.filter((b) => b.id !== blog.id);
};

const editingBlog = ref<BlogCard | null>(null);

const saveEditingBlog = async (blog: BlogCard, newFiles: NewFiles) => {
  const { validateErrors } = validateZod(ZodBlogAddWithoutFile, blog);
  if (validateErrors) {
    console.warn("Add new blog validation errors", validateErrors, blog);
    return { errorMessage: validateErrors };
  }
  try {
    await editBlogApi(blog, newFiles);
    const index = currentItems.value.findIndex(
      (blog) => blog.id === editingBlog.value?.id
    );
    if (index !== -1) {
      currentItems.value[index] = {
        ...blog,
      };
      currentItems.value = currentItems.value.sort((a, b) =>
        a.date < b.date ? 1 : -1
      );
    }
    editingBlog.value = null;
  } catch {
    return { errorMessage: "Error saving an edited blog" };
  }
};

const startEditing = (blog: BlogCard) => {
  editingBlog.value = { ...blog };
};
</script>

<style scoped></style>
