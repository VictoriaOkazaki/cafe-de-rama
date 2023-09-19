import { Ref } from 'vue'

export const useIntersection = (
    elRef: Ref<HTMLElement>,
    callback: (entry: IntersectionObserverEntry, intersecting: boolean) => void,
    {
        workTrueOnce,
        workTrueOnly
    }: {
        workTrueOnce: boolean,
        workTrueOnly: boolean
    } = {
            workTrueOnce: false,
            workTrueOnly: false
        }
) => {
    onMounted(() => {
        const observer = new IntersectionObserver(entries => {
            const intersectingeEntries: IntersectionObserverEntry[] = []
            entries.forEach(entry => {
                const intersecting = entry.isIntersecting

                if (!workTrueOnly || (workTrueOnly && intersecting)) {
                    callback(entry, intersecting)
                }

                if (intersecting) {
                    intersectingeEntries.push(entry)
                }
            })
            let allIntersecting = true
            for (const entry of entries) {
                if (!intersectingeEntries.includes(entry)) {
                    allIntersecting = false
                    break
                }
            }
            if (allIntersecting && workTrueOnce) {
                observer.disconnect()
            }
        })
        observer.observe(elRef.value)

        return () => {
            observer.disconnect()
        }
    })
}