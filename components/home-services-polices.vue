<template>
    <section class="polices bg-dark overflow-hidden z-max pattern relative py-28">
        <div class="container py-2">
            <div class="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 gap-28">
                <div class="lg:col-start-1 lg:col-end-4">
                    <div class="content">
                        <h4 class="text-head leading-head font-bold text-primary mb-12">
                            الخدمات الإدارية
                        </h4>
                        <ul class="list-items w-full">
                            <li class="text-white relative z-max mb-6 font-light text-paragraph leading-head pr-10"  v-for="polices in policesList" :key="polices.code">
                                {{ polices.item }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-start-4 lg:col-end-6">
                    <img src="/img/polices.svg" class="w-full h-polices object-contain" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.polices{
    &::after{
        bottom: 120px;
        background-image: url('/img/gold_top_graph.svg');
    }
    &::before{
        top: 120px;
        background-image: url('/img/bottom_white_garph.svg');
    }
    .list-items{
        li{
            &:last-child{
                margin: 0px !important;
            }
        }
    }
}
@media(max-width: 600px){
    .polices{
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
        let policesList = ref([
            {
                code: '1',
                item: 'الاقرارات الضريبية',
            },
            {
                code: '2',
                item: 'الاقرارات الزكوية'
            },
            {
                code: '3',
                item: 'اصدار الباركودات ( ترقيم المنتجات )'
            },
            {
                code: '4',
                item: '، تقديم العلامات التجارية من انشاء الهوية للعلامة التجاريةوالترجمة الى القبول النهائي للعلامة واستلام شهادة التملك'
            },
            {
                code: '5',
                item: '، طلبات وزارة التجارة بكامل خطواتها من الانشاء ووقت الاصدار وما بعد الاصدار للسجلات التجارية'
            },
            {
                code: '6',
                item: '، تقديم خدمات تسجيل المنتجات الغذائية والمستلزمات الطبية والغير طبية في هيئة الغذاء والدواء ، خدمات وزارة العدل بفروعها محاكم الدرجة  الأولى والتنفيذ في تقديم الطلبات ومعالجة الاخطاء في رفع الطلبات'
            }
        ]);
        return{
            policesList
        }
    }
}
</script>