import { ZodObject } from "zod";
import { validateZod } from "~/composables/validate";
import {
  ZodBlogCardAdd,
  ZodBlogCardEdit,
  ZodShopCardAdd,
  ZodShopCardEdit,
} from "~/types";
import { getFirebaseFileUrl } from "./bucket";

export type EntityName = "blogs" | "goods";

export function getEntityNameFromRoute(event: any): EntityName {
  const entityName = getRouterParam(event, "name") || "";
  if (!["blogs", "goods"].includes(entityName)) {
    throw createError({
      statusCode: 400,
      statusMessage: `Entity name should be blogs or goods`,
    });
  }
  return entityName as EntityName;
}

export function createEntity(entityId: string, data: any) {
  if (data.mainFile) {
    data.mainFile = {
      fileName: data.mainFile.fileName,
      src: getFirebaseFileUrl(data.mainFile.fileName),
    };
  }

  if (data.extraFiles) {
    data.extraFiles = data.extraFiles.map(
      (extraFile: { fileName: string }) => ({
        fileName: extraFile.fileName,
        src: getFirebaseFileUrl(extraFile.fileName),
      })
    );
  }

  const entity = {
    ...data,
    id: entityId,
  };

  return entity;
}

function createValidateEntity(
  getZodValidateEntity: (entityName: EntityName) => ZodObject<any> | null
) {
  return (entityName: EntityName, newEntity: any) => {
    const ZodValidateEntity = getZodValidateEntity(entityName);
    if (!ZodValidateEntity) {
      throw createError({
        statusCode: 500,
        statusMessage: `Validation for entity ${entityName} not implemented`,
      });
    }

    const { validateErrors } = validateZod(ZodValidateEntity, newEntity);
    if (validateErrors) {
      throw createError({
        statusCode: 400,
        statusMessage: `Bad request: ${validateErrors}`,
      });
    }
  };
}

export const validateNewEntity = createValidateEntity((entityName) => {
  let ZodValidateEntity: ZodObject<any> | null = null;
  if (entityName === "blogs") {
    ZodValidateEntity = ZodBlogCardAdd;
  }
  if (entityName === "goods") {
    ZodValidateEntity = ZodShopCardAdd;
  }
  return ZodValidateEntity;
});

export const validateEditedEntity = createValidateEntity((entityName) => {
  let ZodValidateEntity: ZodObject<any> | null = null;
  if (entityName === "blogs") {
    ZodValidateEntity = ZodBlogCardEdit;
  }
  if (entityName === "goods") {
    ZodValidateEntity = ZodShopCardEdit;
  }
  return ZodValidateEntity;
});
