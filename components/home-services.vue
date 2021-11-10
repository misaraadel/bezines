<template>
    <section class="services bg-secodary overflow-hidden z-max pattern relative py-28" id="services">
        <div class="container py-2">
            <div class="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 gap-28">
                <div class="lg:col-start-1 lg:col-end-3">
                    <img src="/img/services.svg" class="w-full h-services object-contain" alt="" />
                </div>
                <div class="lg:col-start-3 lg:col-end-6">
                    <div class="content">
                        <h4 class="text-head leading-head font-bold text-primary mb-20">
                            الخدمات الإدارية
                        </h4>
                        <ul class="list-items w-full">
                            <li class="text-white relative z-max mb-4 font-light text-paragraph leading-head pr-10"  v-for="services in servicesList" :key="services.code">
                                {{ services.item }}
                            </li>
                        </ul>
                        <a href="#" class="rounded-btn btn-content relative z-max w-fit-content mt-16 h-logo px-10 bg-primary text-dark font-bold text-paragraph leading-head flex justify-center items-center content-center text-center">
                            طلب خدمة
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .services{
        &::after{
            top: 0;
            background-image: url('/img/gold_top_graph.svg');
        }
    }
    @media(max-width: 500px){
        .services{
            h4{
                font-size: 32px;
            }
            li{
                font-size: 12px;
                line-height: 1.5rem;
            }
        }
    }
</style>
<script>
import { ref } from 'vue'
export default {
    setup() {
        let servicesList = ref([
            {
                code: '1',
                item: 'اصدار اللوائح الداخلية للمنشآت',
            },
            {
                code: '2',
                item: 'تنظيم ملفات الموظفين من ابرام العقد وحتى انهاء العلاقة التعاقدية المتميزة لدينا'
            },
            {
                code: '3',
                item: 'ملفات شؤون الموظفين'
            },
            {
                code: '4',
                item: 'عملية اصدار الرواتب وتنظيم حماية الاجور'
            }
        ]);
        return{
            servicesList
        }
    }
}
</script>