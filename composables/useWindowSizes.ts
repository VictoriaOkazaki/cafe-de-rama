export const useWindowSizes = () => {
    const width = ref(0);
    const height = ref(0);

    const onResize = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

    onMounted(() => {
        onResize();
        window.addEventListener("resize", onResize);
    })

    onBeforeUnmount(() => {
        window.removeEventListener("resize", onResize);
    });

    return { width, height };
}