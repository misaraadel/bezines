<template>
    <header class="w-full pattern overflow-hidden py-40 relative bg-dark bg-cover bg-no-repeat" id="header" style="background-image: url('/img/header.png')">
        <div class="container">
            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-28 md:gap-6 sm:gap-6">
                <div class="content w-full h-full flex-col flex justify-center">
                    <h4 class="text-head font-bold leading-head mb-10 text-primary">
                        سرعة إنجاز الأعمال  
                    </h4>
                    <p class=" text-paragraph font-normal text-white leading-head m-0">
                        تقديم الخدمات التجارية والدعم الاداري للافراد والمنشآت
                        المتمثلة بالمؤسسات الفردية والشركات الخاصة
                        والحكومية على مستوى المملكة
                    </p>
                </div>
                <div class="image-content w-full h-header">
                    <img src="/img/header.svg" class="w-full h-full object-contain" alt="" />
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
    header{
        &::after{
            background-image: url('/img/bottom_white_garph.svg');
            bottom: 26px;
        }
        &::before{
            background-image: url('/img/white_top_graph.svg');
            top: 0px;
        }
    }
    @media(max-width: 400px){
        header{
            h4{
                font-size: 32px !important;
            }
        }
    }
</style>