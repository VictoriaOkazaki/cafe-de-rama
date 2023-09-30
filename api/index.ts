import { getAuth } from "firebase/auth";
import { EntityName } from "~/server/modules/entity";
import { NewFiles, EntityAdd, CardEntity, EntityEdit } from "~/types";

const getAuthHeader = async () => {
  const auth = getAuth();

  if (!auth.currentUser) {
    throw new Error("Get headers current user not exists");
  }

  const token = await auth.currentUser.getIdToken();

  // TODO: env develop
  if (process.env.NODE_ENV === "development") {
    console.log("token", token);
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

const getHeaders = async () => {
  const authHeader = await getAuthHeader();
  return {
    "Content-Type": "application/json",
    ...authHeader,
  };
};

export const checkAuthedApi = async () => {
  const response = await fetch("/api/authed", {
    headers: await getHeaders(),
  });
  console.log("Check authed by server", await response.text());
};

type AddFileParams = {
  ignoreAlreadyExists: boolean;
  nameType: "random" | "origin";
};
export const addFileApi = async (
  file: File,
  params?: Partial<AddFileParams>
): Promise<string> => {
  const defaultParams: AddFileParams = {
    ignoreAlreadyExists: false,
    nameType: "random",
  };
  const _params: AddFileParams = params
    ? { ...defaultParams, ...params }
    : defaultParams;
  const formData = new FormData();
  formData.set("file", file);
  formData.set("nameType", _params.nameType);
  const response = await fetch("/api/file", {
    method: "POST",
    headers: await getAuthHeader(),
    body: formData,
  });
  if (!response.ok) {
    let ignoreError = false;
    if (_params.ignoreAlreadyExists && response.status === 400) {
      if (
        response.statusText.includes(
          `File with name ${file.name} already exists`
        )
      ) {
        ignoreError = true;
      }
      console.warn(`Ignore. ${response.statusText}`);
    }
    if (!ignoreError) {
      throw new Error(
        `Error upload request (status: ${response.status}) ${response.statusText}`
      );
    }
  }
  const { fileName, url } = await response.json();
  console.log(`File added ${fileName}`, url);
  return fileName;
};

export const deleteEntityApi = async (
  entityName: EntityName,
  entityId: string
) => {
  const response = await fetch(`/api/entity/${entityName}`, {
    method: "DELETE",
    headers: await getHeaders(),
    body: JSON.stringify({ id: entityId }),
  });
  if (!response.ok) {
    throw new Error(
      `Error delete ${entityName} entity request (status: ${response.status}) ${response.statusText}`
    );
  }
  console.log(`Entity ${entityName} deleted`, await response.text());
};

export const editEntityApi = async (
  entityName: EntityName,
  entity: CardEntity,
  newFiles: NewFiles
) => {
  const updatedEntity: EntityEdit = {
    ...entity,
  };
  if (newFiles.posterFile) {
    const apiFileName = await addFileApi(newFiles.posterFile);

    console.log("Poster file uploaded", newFiles.posterFile.name);

    updatedEntity.mainFile = {
      fileName: apiFileName,
    };
  }

  if (newFiles.extraFiles.length) {
    const extraFiles: { fileName: string }[] = [];

    for (const extraFile of newFiles.extraFiles) {
      const extraFileName = await addFileApi(extraFile);
      extraFiles.push({ fileName: extraFileName });
      console.log("Extra file uploaded", extraFile.name);
    }

    updatedEntity.extraFiles = extraFiles;
  }

  console.log("Will updatedEntity", updatedEntity);
  const response = await fetch(`/api/entity/${entityName}`, {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify(updatedEntity),
  });
  if (!response.ok) {
    throw new Error(
      `Error edit ${entityName} entity request (status: ${response.status}) ${response.statusText}`
    );
  }
  console.log(`Entity ${entityName} edited`, await response.text());
};

export const createEntityApi = async (
  entityName: EntityName,
  entity: EntityAdd,
  newFiles: NewFiles
) => {
  const posterFile = newFiles.posterFile;
  if (!posterFile) {
    throw new Error(
      `Error create new ${entityName} entity api. Empty poster file`
    );
  }
  const posterFileName = await addFileApi(posterFile);
  console.log("Poster file uploaded", posterFile.name);

  const extraFiles: { fileName: string }[] = [];

  for (const extraFile of newFiles.extraFiles) {
    const extraFileName = await addFileApi(extraFile);
    extraFiles.push({ fileName: extraFileName });
    console.log("Extra file uploaded", extraFile.name);
  }

  const newEntity: EntityAdd = {
    ...entity,
    mainFile: { fileName: posterFileName },
    extraFiles,
  };
  const response = await fetch(`/api/entity/${entityName}`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(newEntity),
  });
  if (!response.ok) {
    throw new Error(
      `Error create ${entityName} entity request (status: ${response.status}) ${response.statusText}`
    );
  }
  console.log(`Entity ${entityName} created`, await response.text());
};
