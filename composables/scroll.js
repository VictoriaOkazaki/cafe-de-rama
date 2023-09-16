export const smoothScrollToSection = (elemId) => {
    const { isBurgerOpen } = useBurger();
    isBurgerOpen.value = false;
    const elemToScroll = document.getElementById(elemId);

    elemToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

export const scrollOnTopOfPage = (smooth = false) => {
    document.querySelector('body')?.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
    });
}