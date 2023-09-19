<template>
    <div id="nav-icon3" @click="burgerClick" :class="{ 'open': isBurgerOpen }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
  
<script setup>
const { isBurgerOpen } = useBurger()
const burgerClick = () => {
    isBurgerOpen.value = !isBurgerOpen.value
}
</script>
  
<style lang="scss" scoped>
#nav-icon3 {
    display: none;
    width: 60px;
    height: 40px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    z-index: 10;
    order: 4;
}

#nav-icon3 span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: $acsent-2;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
    top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
    top: 20px;
}

#nav-icon3 span:nth-child(4) {
    top: 40px;
}

#nav-icon3.open span:nth-child(1) {
    top: 40px;
    width: 0%;
    left: 50%;
}

#nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
    top: 6px;
    width: 0%;
    left: 50%;
}

@media (max-width: 1300px) {
    #nav-icon3 {
        display: block;
    }
}

@media (max-width: 800px) {
    #nav-icon3 {
        width: 50px;
        height: 32px;
    }

    #nav-icon3 span:nth-child(2),
    #nav-icon3 span:nth-child(3) {
        top: 16px;
    }

    #nav-icon3 span:nth-child(4) {
        top: 32px;
    }

    #nav-icon3.open span:nth-child(1) {
        top: 32px;
    }
}

@media (max-width: 500px) {
    #nav-icon3 {
        width: 36px;
        height: 24px;
    }

    #nav-icon3 span:nth-child(2),
    #nav-icon3 span:nth-child(3) {
        top: 12px;
    }

    #nav-icon3 span:nth-child(4) {
        top: 24px;
    }

    #nav-icon3.open span:nth-child(1) {
        top: 24px;
    }
}

@media (max-width: 340px) {
    #nav-icon3 {
        width: 30px;
        height: 20px;
    }

    #nav-icon3 span:nth-child(2),
    #nav-icon3 span:nth-child(3) {
        top: 10px;
    }

    #nav-icon3 span:nth-child(4) {
        top: 20px;
    }

    #nav-icon3.open span:nth-child(1) {
        top: 20px;
    }
}
</style>