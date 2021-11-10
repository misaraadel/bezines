<template>
    <footer class="w-full py-20 bg-footer bg-no-repeat bg-cover" style="background-image: url(/img/footer.png);">
        <div class="container">
            <div class="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-12">
                <div class="lg:col-start-1 lg:col-end-3">
                    <div class="content">
                        <brand-logo />
                        <p class="text-white lg:pl-12 md:pl-0 sm:pl-0 font-normal text-paragraph leading-head my-10">
                            تقديم الخدمات التجارية والدعم الاداري للافراد والمنشآت
                            المتمثلة بالمؤسسات الفردية والشركات 
                        </p>
                        <socail-media />
                    </div>
                </div>
                <div class="lg:col-start-3 lg:col-end-4">
                    <div class="content">
                        <h4 class=" text-sub-head font-bold text-primary leading-head mb-8">
                            روابط هامة
                        </h4>
                        <ul class="items-content">
                            <li class="mb-1" v-for="item in Linksitems" :key="item.code" >
                                <a :href="`#${item.link}`" class="text-white font-normal leading-btn">
                                    {{ item.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-start-4 lg:col-end-5">
                    <h4 class=" text-sub-head font-bold text-primary leading-head mb-8">
                        تواصل معنا
                    </h4>
                    <ul class="contact-list">
                        <li class="relative z-max mb-5 pr-10">
                            <a href="mailto:info@cayan.io" class="text-white font-light text-paragraph leading-head">
                                info@cayan.io
                            </a>
                        </li>
                        <li class="relative z-max mb-6 pr-10 flex flex-col">
                            <a href="tel:+966554441038" class="text-white font-light text-paragraph leading-head">
                                +966 55 444 1038
                            </a>
                            <a href="tel:+966554441038" class="text-white font-light text-paragraph leading-head">
                               +966 55 444 1038
                            </a>
                        </li>
                        <li class="relative z-max pr-10">
                            <a href="#" class="text-white font-light text-paragraph leading-head">
                             الرياض , حي الروضة
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss">
footer{
    .content{
        position: relative;
        &::After{
            content: '';
            position: absolute;
            width: 1px;
            height: 130px;
            background-color: rgba($color: #fff, $alpha: .10);
            top: 50%;
            left: 40px;
            transform: translateY(-50%);
        }
    }
    .items-content{
        li{
            &:last-child{
                margin: 0px !important;
            }
        }
    }
    .contact-list{
        li{
            &::after{
                content: '';
                position: absolute;
                width: 24px;
                height: 24px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                right: 0px;
                top: 6px;
                z-index: -1;
            }
            &:first-child{
                &::after{
                    background-image: url('/img/message.svg');
                }
            }
            &:nth-child(2){
                &::after{
                    background-image: url('/img/phone.svg');
                }
            }
            &:last-child{
                &::after{
                    background-image: url('/img/loaction.svg');
                }
            }
        }
    }
}
@media (max-width: 900px) {
    footer{
        .content{
            &::After{
                width: 100px;
                height: 1px;
                bottom: -30px;
                top: unset !important;
                left: 50%;
                transform: translateY(0px) translateX(-50%) !important;
            }
        }
    }
}
</style>
<script>
import { ref } from 'vue'
export default {
    setup() {
        let Linksitems = ref([
            {
                code: '1',
                name: 'عن بيزنس',
                link: 'header'
            },
            {
                code: '2',
                name: 'طلب الخدمة',
                link: 'contact'
            },
            {
                code: '3',
                name: 'خدمات بيزنس',
                link: 'services'
            },
            {
                code: '4',
                name: 'مميزات بيزنس',
                link: 'about'
            }
        ]);
        return{
            Linksitems
        }
    }
}
</script>