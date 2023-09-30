<template>
  <v-container>
    <v-row>
      <v-col sm="12">
        <div class="text-subtitle-1 text-medium-emphasis">Текст на русском</div>

        <v-text-field v-model="editingCard.title" label="Title" required>
        </v-text-field>

        <v-textarea v-model="editingCard.text" label="Text" required>
        </v-textarea>
      </v-col>

      <v-col sm="12">
        <div class="text-subtitle-1 text-medium-emphasis">
          Текст на английском
        </div>

        <v-text-field v-model="editingCard.titleEn" label="Title" required>
        </v-text-field>

        <v-textarea v-model="editingCard.textEn" label="Text" required>
        </v-textarea>
      </v-col>

      <v-col sm="12">
        <div class="text-subtitle-1 text-medium-emphasis">
          Текст на азербайджанском
        </div>

        <v-text-field v-model="editingCard.titleAz" label="Title" required>
        </v-text-field>

        <v-textarea v-model="editingCard.textAz" label="Text" required>
        </v-textarea>
      </v-col>

      <v-col sm="12" v-if="entityName === 'goods'">
        <div class="text-subtitle-1 text-medium-emphasis">Цена</div>
        <v-text-field
          v-model.number="(editingCard as ShopCard).price"
          label="Введите цену"
          type="number"
        ></v-text-field>
      </v-col>

      <v-col sm="12">
        <div class="text-subtitle-1 text-medium-emphasis">Обложка</div>
        <img
          class="blog-img"
          v-if="editingCard.mainFile.src"
          :src="editingCard.mainFile.src"
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

      <v-col sm="12">
        <div class="text-subtitle-1 text-medium-emphasis">
          Дополнительные фото
        </div>
        <img
          v-for="extraFile in editingCard.extraFiles"
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
import { EntityName } from "~/server/modules/entity";
import { CardEntity, NewFiles, ShopCard } from "~/types";

const props = defineProps<{
  entityName: EntityName;
  startCard?: CardEntity;
  saveChanges: (
    card: CardEntity,
    newFiles: NewFiles
  ) => Promise<{
    errorMessage: string;
  } | void>;
  cancel: () => void;
}>();

const isEditing = !!props.startCard;
const isUpdateDate = ref(false);

const fileInputKey = ref(1);
let newPosterFile: File | null = null;
let newExtraFiles: File[] = [];

const getEmptyCardData = (): CardEntity => {
  const card: CardEntity = {
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
  if (props.entityName === "goods") {
    (card as ShopCard).price = 0;
  }
  return card;
};

const clearData = () => {
  editingCard.value = getEmptyCardData();
  newPosterFile = null;
  fileInputKey.value += 1;
};

const editingCard = ref<CardEntity>(props.startCard || getEmptyCardData());

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
    if (editingCard.value) {
      editingCard.value.mainFile = {
        fileName: newPosterFile.name,
        src: await toBase64(newPosterFile),
      };
    }
  }

  if (type === "extra" && input && input.files) {
    newExtraFiles = [...input.files];
    if (editingCard.value) {
      editingCard.value.extraFiles = [];
      for (const newExtraFile of newExtraFiles) {
        const extraFile = {
          fileName: newExtraFile.name,
          src: await toBase64(newExtraFile),
        };
        editingCard.value.extraFiles.push(extraFile);
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
    editingCard.value.date = getUtcDate();
  }

  try {
    const data = await props.saveChanges(editingCard.value, {
      posterFile: newPosterFile,
      extraFiles: newExtraFiles,
    });

    if (data?.errorMessage) {
      errorText.value = data?.errorMessage;
    } else {
      const entityName = props.entityName.toUpperCase();
      successText.value = isEditing
        ? `${entityName} card was saved`
        : `${entityName} card was created`;
      clearData();
      clearSuccessTm = setTimeout(() => {
        successText.value = "";
      }, 3000);
    }
  } catch {
    errorText.value = `Error saving a ${props.entityName} card`;
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
