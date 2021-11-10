<template>
    <div>
        <nav class="navbar w-full py-7 z-full-max bg-dark ">
            <div class="container">
                <div class="content w-full flex items-center content-center justify-between">
                    <brand-logo />
                    <ul class="content flex items-center content-center">
                        <li class="ml-10"> 
                            <img src="/img/light.svg" class="w-navIcon h-navIcon object-contain" alt="" />
                        </li>
                        <li>
                            <div class="nav-toggler relative w-toggleIcon h-navIcon flex flex-col justify-between cursor-pointer">
                                <span class="block mr-auto ml-2.5 w-half relative h-toggleDash opacity-100 bg-primary "></span>
                                <span class="block w-full relative h-toggleDash opacity-100 bg-primary "></span>
                                <span class="block w-half mr-2.5 relative h-toggleDash opacity-100 bg-primary "></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style lang="scss">
    .nav-toggler{
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        span{
            transform: rotate(0deg);
            transition: .25s ease-in-out;
        }
        &.active{
            span{
                &:nth-child(1) {
                    width: 100%;
                    top: 14px;
                    transform: rotate(124deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(3) {
                    width: 100%;
                    top: -5px;
                    transform: rotate(-135deg);
                }
            }
        }
    }
</style>