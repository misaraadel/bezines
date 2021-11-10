<template>
    <section class="clients pattern relative z-max overflow-hidden w-full py-24 bg-secodary">
        <div class="container">
            <div class="heading w-full text-center mb-24">
                <h4 class="text-primary font-bold text-head leading-head mb-3">
                   قاعدة عملاؤنا
                </h4>
                <p class="text-paragraph font-normal text-white opacity-70 leading-head m-0">
                  الذين تشرفنا بتقديم نظام بيزنس لهم فكانوا شركاءا للنجاح
                </p>
            </div>
            <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6">
              <div v-for="brand in brands" :key="brand.img">
                <img :src="`/img/item_${brand.img}.svg`" class="w-brands h-brands object-contain object-center" alt="" />
              </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
  .clients{
    &::after{
      bottom: 0px;
      background-image: url('/img/gold_top_graph.svg');
    }
    &::before{
      top: 100px;
      background-image: url('/img/bottom_white_garph.svg');
    }
  }
</style>
<script>
import { ref } from 'vue';
export default {
  setup(){
    let brands = ref([ 
      {
        img: '4',
      },  
      {
        img: '1',
      },
      {
        img: '2',
      },  
      {
        img: '3',
      }, 
      {
        img: '5',
      },
    ]);
    return{
      brands
    }
  }
}
</script>