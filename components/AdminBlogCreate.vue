<template>
  <AdminBlogEditor
    :key="componentKey"
    :cancel="reload"
    :save-changes="saveNewBlog"
  />
</template>

<script setup lang="ts">
import { createBlogApi } from "~/api";
import { validateZod } from "~/composables/validate";
import { BlogCard, NewFiles, ZodBlogAddWithoutFile } from "~/types";

const componentKey = ref(1);
const reload = () => {
  componentKey.value += 1;
};

const saveNewBlog = async (blog: BlogCard, newFiles: NewFiles) => {
  const { validateErrors } = validateZod(ZodBlogAddWithoutFile, blog);
  if (validateErrors) {
    console.warn("Add new blog validation errors", validateErrors, blog);
    return { errorMessage: validateErrors };
  }
  if (!newFiles.posterFile) {
    return { errorMessage: `Обложка не выбрана.` };
  }
  await createBlogApi(blog, newFiles);
  console.log("New blog added", blog);
};
</script>

<style scoped></style>
