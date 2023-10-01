import { utcToUiDateFormat } from "~/server/modules/date";

type ApiItemsResponse<T> = { items: T[]; next: boolean };

export function useShowMoreRequest<T>(
  increaseShowCount: Ref<number>,
  pageNum: number,
  requestUrl: string
) {
  const currentItems: Ref<T[]> = ref([]);
  const proccessing = ref(false);
  const canIncreaseShowCount = ref(true);

  const getStartOffset = () => {
    return (pageNum - 1) * increaseShowCount.value;
  };

  let offset = getStartOffset();

  const increaseCurShowCount = async () => {
    console.log("increaseCurShowCount");
    proccessing.value = true;
    const limit = increaseShowCount.value;
    const url = `${requestUrl}?offset=${offset}&limit=${limit}`;
    try {
      const { items, next }: ApiItemsResponse<T> = await $fetch(url);
      canIncreaseShowCount.value = next;
      // console.log('increaseCurShowCount', url, items);
      offset += limit;
      const transformItems = items.map((item: any) => {
        const newItem = { ...item };
        // Здесь могут быть изменения объектов с бэка
        return newItem;
      });
      currentItems.value = [...currentItems.value, ...transformItems];
    } catch (err) {
      console.error("Error increaseCurShowCount", url, err);
    }
    proccessing.value = false;
  };

  const setStartShowCount = () => {
    offset = getStartOffset();
    canIncreaseShowCount.value = true;
    increaseCurShowCount();
  };

  watch(increaseShowCount, () => {
    setStartShowCount();
  });

  return {
    currentItems,
    increaseCurShowCount,
    canIncreaseShowCount,
    setStartShowCount,
  };
}
