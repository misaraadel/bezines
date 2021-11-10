<template>
    <section class="w-full why-content overflow-hidden relative z-max pattern py-32 bg-secodary" id="about">
        <div class="container">
            <div class="heading w-full text-center mb-24">
                <h4 class="text-primary font-bold text-head leading-head mb-3">
                    لماذا بيزنس ؟
                </h4>
                <p class="text-paragraph font-normal text-white opacity-70 leading-head m-0">
                    لماذا تختار بيزنس دون كل الشركات الأخرى فما مميزاتها
                </p>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-32">
                <div class="box-content" v-for="whyList in whyLists" :key="whyList.img">
                    <div class="box relative z-max flex flex-col items-center content-center text-center justify-center">
                        <img :src="`/img/${whyList.img}.svg`" :alt="`${whyList.name}`">
                        <h4 class="text-sub-head my-5 font-bold text-primary leading-head">
                            {{ whyList.name }}
                        </h4>
                        <p class="text-paragraph font-light text-white leading-head">
                            {{ whyList.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.why-content{
    &::before{
        background-image: url('/img/white_top_graph.svg');
        bottom: 0px;
    }
    .box-content{
        .box{
            img{
                transition: all .3s linear;
            }
            &::after{
                content: '';
                position: absolute;
                width: 1px;
                height: 100px;
                left: -65px;
                top: calc(50% - 50px);
                background-color: rgba($color: #fff, $alpha: .1);
                z-index: -1;
            }
            &:hover{
                img{
                    animation: bounce-in-fwd .5s linear 1;
                }
            }
        }
        &:last-child .box{
            &::after{
                display: none;
            }
        }
    }
}
</style>
<script>
import { ref } from 'vue';
export default {
    setup() {
        let whyLists = ref([
            {
                name: 'معتمدة وموثقة',
                img: 'why_1',
                desc: 'تقديم الخدمات التجارية والدعم الإداري للافراد والمنشآت'
            },
            {
                name: 'أفكارك في النور',
                img: 'why_2',
                desc: 'تقديم الخدمات التجارية والدعم الإداري للافراد والمنشآت'
            },  
            {
                name: 'معتمدة وموثقة',
                img: 'why_3',
                desc: 'تقديم الخدمات التجارية والدعم الإداري للافراد والمنشآت'
            }
        ]);
        return{
            whyLists
        }
    }
}
</script>