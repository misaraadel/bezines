<template>
    <section class="requset w-full py-28 bg-secodary pattern relative z-max overflow-hidden">
        <div class="container py-3">
            <div class="content lg:w-semi-half relative text-center md:w-full sm:w-full m-auto flex flex-col justify-center items-center content-center">
                <h5 class="text-requsest font-bold mb-11 text-white leading-requsest ">
                    اطلب نظام بيزنس الان وأدر مؤسستك بكل سهولة وبخيارات كثيرة ومتعددة
                    لكل الشركات         
                </h5>
                <img src="/img/scribble.svg" class="w-arrowIcon h-arrowIcon object-contain absolute arrowIcon" alt=""/>
                <a href="#" class="rounded-video black-btn btn-content relative z-max w-fit-content h-requsest bg-dark text-primary font-bold text-requsest leading-btn flex justify-center items-center content-center text-center">
                   اطلب الان
                </a>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .requset{
        .arrowIcon{
            top: 50%;
            transform: translateY(-50%);
            right: 120px;
            animation: bounce-in-fwd 2s linear infinite;
        }
        &::after{
            bottom: 112px;
            background-image: url('/img/gold_top_graph.svg');
        }
        &::before{
            top: 0px;
            background-image: url('/img/bottom_white_garph.svg');
        }
    }
    @media (max-width: 900px) {
        .requset{
            .arrowIcon{
                right: 10px;
                top: 40%;
            }
            h5{
                font-size: 12px;
            }
        }
    }
</style>