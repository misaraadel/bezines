<template>
    <section class="video w-full bg-secodary">
        <div class="container">
            <div class="video-content border border-solid border-primary w-full flex justify-center content-center items-center rounded-video bg-cover bg-no-repeat bg-center h-video" style="background-image:url('/img/video.png');">
                <div class="flex items-center content-center">
                    <div>
                        <img src="/img/video_icon.svg" class="h-videoIcon rounded-circle video-icon w-videoIcon object-contain" alt="">
                    </div>
                    <h4 class="text-head font-bold text-white leading-head mr-6">
                        اعرف اكثر
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .video{
        .video-icon{
            animation: pulse-shadow 2.5s ease-out infinite;
            transition: all 500ms ease ;
            box-shadow: 0 0 0 0 rgba($color: #FDD301, $alpha: .6), 0 0 0 0 rgba($color: #FDD301, $alpha: .8);
        }
    }
    @media(max-width: 600px){
        .video{
            .video-content{
                height: 300px;
                div{
                    flex-direction: column;
                    h4{
                        margin: 25px 0px 0px 0px ;
                    }
                }
            }
        }
    }
</style>