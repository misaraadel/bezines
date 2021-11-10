<template>
    <ul class="social-media flex items-center content-center">
        <li class="ml-2" v-for="socail in socailmedia" :key="socail.code"> 
            <a :href="`${socail.link}`" class="w-socail link h-socail flex justify-center content-center items-center border-solid border border-primary rounded-circle">
                <img class="w-socailIcon h-socailIcon object-contain" :src="`/img/${socail.item}.svg`" :alt="`${socail.item}`" />
            </a>
        </li>
    </ul>
</template>
<style lang="scss">
    .social-media{
        .link{
            transition: all .4s linear;
            img{
                filter: invert(88%) sepia(33%) saturate(5282%) hue-rotate(2deg) brightness(105%) contrast(107%);
            }
            &:hover{
                background-color: #FDD301;
                img{
                    animation: bounce-in-fwd .5s linear;
                    filter: invert(0%) sepia(92%) saturate(31%) hue-rotate(155deg) brightness(90%) contrast(106%);
                }
            }
        }
    }
</style>
<script>
import { ref } from 'vue'
export default {
    setup() {
        let socailmedia = ref([
            {
                code: '1',
                link: 'www.facebook.com',
                item: 'face'
            }, 
            {
                code: '2',
                link: 'www.youtube.com',
                item: 'youtube'
            },
            {
                code: '3',
                link: 'www.twiiter.com',
                item: 'twiiter'
            },
            {
                code: '1',
                link: 'www.instagram.com',
                item: 'insta'
            },
        ]);
        return{
            socailmedia
        }
    }
}
</script>