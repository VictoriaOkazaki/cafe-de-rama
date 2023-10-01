<template>
  <AdminCardEditor
    :entityName="entityName"
    :key="componentKey"
    :cancel="reload"
    :save-changes="saveNewCard"
  />
</template>

<script setup lang="ts">
import { createEntityApi } from "~/api";
import { validateZod } from "~/composables/validate";
import { EntityName } from "~/server/modules/entity";
import {
  CardEntity,
  NewFiles,
  ZodAdminBlogCardAdd,
  ZodAdminShopCardAdd,
} from "~/types";

const props = defineProps<{
  entityName: EntityName;
}>();

const componentKey = ref(1);
const reload = () => {
  componentKey.value += 1;
};

const saveNewCard = async (card: CardEntity, newFiles: NewFiles) => {
  const ZodValidObj =
    props.entityName === "blogs" ? ZodAdminBlogCardAdd : ZodAdminShopCardAdd;
  const { validateErrors } = validateZod(ZodValidObj, card);
  if (validateErrors) {
    console.warn(
      `Add new ${props.entityName} card validation errors`,
      validateErrors,
      card
    );
    return { errorMessage: validateErrors };
  }
  if (!newFiles.posterFile) {
    return { errorMessage: `Обложка не выбрана.` };
  }
  await wrapInAdminLoading(async () => {
    await createEntityApi(props.entityName, card, newFiles);
  });
  console.log(`New ${props.entityName} card added`, card);
};
</script>

<style scoped></style>
