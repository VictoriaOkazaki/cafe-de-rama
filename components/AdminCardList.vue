<template>
  <div v-show="!editingCard">
    <v-row class="cafe__list mx-2">
      <v-col v-for="card in currentItems" :key="card.id" md="4" xl="4">
        <v-card class="cafe__card">
          <v-img height="100" :src="card.mainFile.src"></v-img>

          <v-card-title>
            {{ card.title }}
          </v-card-title>

          <v-card-text>
            <p>{{ card.text }}</p>
            <b>Date: {{ utcToUiDateFormat(card.date) }}</b>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="startEditing(card)">Edit</v-btn>
            <v-btn color="red" @click="deleteCard(card)">Delete</v-btn>
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

  <AdminCardEditor
    v-if="editingCard"
    :entityName="entityName"
    :cancel="() => (editingCard = null)"
    :start-card="editingCard"
    :save-changes="saveEditingCard"
  />
</template>

<script setup lang="ts">
import {
  CardEntity,
  NewFiles,
  ZodAdminBlogCardAdd,
  ZodAdminShopCardAdd,
} from "~~/types";
import { deleteEntityApi, editEntityApi } from "~~/api";
import { utcToUiDateFormat } from "~/server/modules/date";
import { EntityName } from "~/server/modules/entity";

const props = defineProps<{
  entityName: EntityName;
}>();

const itemsCount = computed(() => 6);
const pageNum = 1;

const { currentItems, canIncreaseShowCount, increaseCurShowCount } =
  useShowMoreRequest<CardEntity>(
    itemsCount,
    pageNum,
    `/api/entity/${props.entityName}`
  );

await wrapInAdminLoading(increaseCurShowCount);

const deleteCard = async (card: CardEntity) => {
  await wrapInAdminLoading(async () => {
    await deleteEntityApi(props.entityName, card.id);
  });
  currentItems.value = currentItems.value.filter((c) => c.id !== card.id);
};

const editingCard = ref<CardEntity | null>(null);

const saveEditingCard = async (card: CardEntity, newFiles: NewFiles) => {
  const ZodValidObj =
    props.entityName === "blogs" ? ZodAdminBlogCardAdd : ZodAdminShopCardAdd;
  const { validateErrors } = validateZod(ZodValidObj, card);
  if (validateErrors) {
    console.warn("Add new blog validation errors", validateErrors, card);
    return { errorMessage: validateErrors };
  }
  try {
    await wrapInAdminLoading(async () => {
      await editEntityApi(props.entityName, card, newFiles);
    });
    const index = currentItems.value.findIndex(
      (c) => c.id === editingCard.value?.id
    );
    if (index !== -1) {
      currentItems.value[index] = {
        ...card,
      };
      currentItems.value = currentItems.value.sort((a, b) =>
        a.date < b.date ? 1 : -1
      );
    }
    editingCard.value = null;
  } catch {
    return { errorMessage: "Error saving an edited blog" };
  }
};

const startEditing = (card: CardEntity) => {
  editingCard.value = { ...card };
};
</script>

<style scoped></style>
