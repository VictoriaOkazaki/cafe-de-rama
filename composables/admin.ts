export const isAdminLoader = ref(false);

export async function wrapInAdminLoading(action: () => Promise<void>) {
  isAdminLoader.value = true;
  try {
    await action();
  } finally {
    isAdminLoader.value = false;
  }
}
