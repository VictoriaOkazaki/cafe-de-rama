import { getAuth } from "firebase/auth";
import { BlogCardAdd, BlogCard, BlogCardEdit, NewFiles } from "~/types";

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

export const deleteBlogApi = async (blog: BlogCard) => {
  const response = await fetch("/api/blog", {
    method: "DELETE",
    headers: await getHeaders(),
    body: JSON.stringify({ id: String(blog.id) }),
  });
  if (!response.ok) {
    throw new Error(
      `Error delete blog request (status: ${response.status}) ${response.statusText}`
    );
  }
  console.log("Blog deleted", await response.text());
};

export const editBlogApi = async (blog: BlogCard, newFiles: NewFiles) => {
  const updatedBlog: BlogCardEdit = {
    id: String(blog.id),
    date: blog.date,
    text: blog.text,
    title: blog.title,
    textEn: blog.textEn,
    titleEn: blog.titleEn,
    textAz: blog.textAz,
    titleAz: blog.titleAz,
  };
  if (newFiles.posterFile) {
    const apiFileName = await addFileApi(newFiles.posterFile);

    console.log("Poster file uploaded", newFiles.posterFile.name);

    updatedBlog.mainFile = {
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

    updatedBlog.extraFiles = extraFiles;
  }

  const response = await fetch("/api/blog", {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify(updatedBlog),
  });
  if (!response.ok) {
    throw new Error(
      `Error edit blog request (status: ${response.status}) ${response.statusText}`
    );
  }
  console.log("Blog edited", await response.text());
};

export const createBlogApi = async (blog: BlogCard, newFiles: NewFiles) => {
  const posterFile = newFiles.posterFile;
  if (!posterFile) {
    throw new Error("Error create new blog api. Empty poster file");
  }
  const posterFileName = await addFileApi(posterFile);
  console.log("Poster file uploaded", posterFile.name);

  const extraFiles: { fileName: string }[] = [];

  for (const extraFile of newFiles.extraFiles) {
    const extraFileName = await addFileApi(extraFile);
    extraFiles.push({ fileName: extraFileName });
    console.log("Extra file uploaded", extraFile.name);
  }

  const newBlog: BlogCardAdd = {
    text: blog.text,
    title: blog.title,
    textEn: blog.textEn,
    titleEn: blog.titleEn,
    textAz: blog.textAz,
    titleAz: blog.titleAz,
    mainFile: { fileName: posterFileName },
    extraFiles,
  };
  const response = await fetch("/api/blog", {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(newBlog),
  });
  if (!response.ok) {
    throw new Error(
      `Error create blog request (status: ${response.status}) ${response.statusText}`
    );
  }
  console.log("Blog created", await response.text());
};
