<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <div class="text-subtitle-1 text-medium-emphasis">Текст на русском</div>

        <v-text-field v-model="editingBlog.title" label="Title" required>
        </v-text-field>

        <v-textarea v-model="editingBlog.text" label="Text" required>
        </v-textarea>
      </v-col>

      <v-col md="12">
        <div class="text-subtitle-1 text-medium-emphasis">
          Текст на английском
        </div>

        <v-text-field v-model="editingBlog.titleEn" label="Title" required>
        </v-text-field>

        <v-textarea v-model="editingBlog.textEn" label="Text" required>
        </v-textarea>
      </v-col>

      <v-col md="12">
        <div class="text-subtitle-1 text-medium-emphasis">
          Текст на азербайджанском
        </div>

        <v-text-field v-model="editingBlog.titleAz" label="Title" required>
        </v-text-field>

        <v-textarea v-model="editingBlog.textAz" label="Text" required>
        </v-textarea>
      </v-col>

      <v-col md="12">
        <div class="text-subtitle-1 text-medium-emphasis">Обложка</div>
        <img
          class="blog-img"
          v-if="editingBlog.mainFile.src"
          :src="editingBlog.mainFile.src"
          alt="blog-img"
        />
        <input
          :key="fileInputKey"
          type="file"
          accept="image/*"
          :multiple="false"
          @change="detectFiles($event, 'poster')"
        />
      </v-col>

      <v-col md="12">
        <div class="text-subtitle-1 text-medium-emphasis">
          Дополнительные фото
        </div>
        <img
          v-for="extraFile in editingBlog.extraFiles"
          class="blog-img"
          :src="extraFile.src"
          alt="blog-img"
        />
        <input
          :key="fileInputKey"
          type="file"
          accept="image/*"
          :multiple="true"
          @change="detectFiles($event, 'extra')"
        />
      </v-col>

      <v-checkbox
        v-if="isEditing"
        v-model="isUpdateDate"
        label="Update publication date"
        color="primary"
      ></v-checkbox>
    </v-row>

    <v-alert
      v-if="errorText"
      class="mt-4"
      color="error"
      icon="$error"
      title="Error"
      :text="errorText"
    ></v-alert>

    <v-alert
      v-if="successText"
      class="mt-4"
      color="success"
      icon="$success"
      title="Success"
      :text="successText"
    ></v-alert>

    <v-btn
      :disabled="controlDisabled"
      block
      @click="saveBlog"
      color="blue"
      variant="elevated"
      class="mt-8"
    >
      Save
    </v-btn>
    <v-btn
      :disabled="controlDisabled"
      block
      @click="cancel"
      color="blue"
      variant="outlined"
      class="mt-4"
    >
      Cancel
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { getUtcDate } from "~/server/modules/date";
import { BlogCard, NewFiles } from "~/types";

const props = defineProps<{
  startBlog?: BlogCard;
  saveChanges: (
    blog: BlogCard,
    newFiles: NewFiles
  ) => Promise<{
    errorMessage: string;
  } | void>;
  cancel: () => void;
}>();

const isEditing = !!props.startBlog;
const isUpdateDate = ref(false);

const fileInputKey = ref(1);
let newPosterFile: File | null = null;
let newExtraFiles: File[] = [];

const getEmptyBlogData = (): BlogCard => {
  return {
    id: "",
    date: "",
    text: "",
    title: "",
    textEn: "",
    titleEn: "",
    textAz: "",
    titleAz: "",
    mainFile: { fileName: "", src: "" },
    extraFiles: [],
  };
};

const clearData = () => {
  editingBlog.value = getEmptyBlogData();
  newPosterFile = null;
  fileInputKey.value += 1;
};

const editingBlog = ref<BlogCard>(props.startBlog || getEmptyBlogData());

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
  });

const detectFiles = async (e: any, type: "poster" | "extra") => {
  const input: HTMLInputElement = e.target;
  if (type === "poster" && input && input.files) {
    newPosterFile = input.files[0];
    if (editingBlog.value) {
      editingBlog.value.mainFile = {
        fileName: newPosterFile.name,
        src: await toBase64(newPosterFile),
      };
    }
  }

  if (type === "extra" && input && input.files) {
    newExtraFiles = [...input.files];
    if (editingBlog.value) {
      editingBlog.value.extraFiles = [];
      for (const newExtraFile of newExtraFiles) {
        const extraFile = {
          fileName: newExtraFile.name,
          src: await toBase64(newExtraFile),
        };
        editingBlog.value.extraFiles.push(extraFile);
      }
    }
  }
};

const errorText = ref("");
const successText = ref("");
let clearSuccessTm: any;

const controlDisabled = ref(false);
const saveBlog = async () => {
  controlDisabled.value = true;
  clearTimeout(clearSuccessTm);
  successText.value = "";
  errorText.value = "";

  if (!isEditing || isUpdateDate.value) {
    editingBlog.value.date = getUtcDate();
  }

  try {
    const data = await props.saveChanges(editingBlog.value, {
      posterFile: newPosterFile,
      extraFiles: newExtraFiles,
    });

    if (data?.errorMessage) {
      errorText.value = data?.errorMessage;
    } else {
      successText.value = isEditing ? "Blog was saved" : "Blog was created";
      clearData();
      clearSuccessTm = setTimeout(() => {
        successText.value = "";
      }, 3000);
    }
  } catch {
    errorText.value = "Error saving a blog";
  }

  controlDisabled.value = false;
};
</script>

<style scoped>
.blog-img {
  width: 100px;
  height: 100px;
}
</style>
