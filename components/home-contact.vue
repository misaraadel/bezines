<template>
    <section class="contact-us bg-secodary" id="contact">
        <div class="container">
            <div class="content w-full overflow-hidden rounded-video">
                <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
                    <div class="lg:col-start-1 lg:col-end-2">
                        <img src="/img/contact.png" class="w-full h-contact object-cover" alt="" />
                    </div>
                    <div class="lg:col-start-2 lg:col-end-5">
                        <div class="form-content py-20 px-20 bg-cover bg-no-repeat bg-dark" style="background-image: url('/img/contact_bk.png')">
                            <form class="w-full">
                                <div class="form-group w-full mb-3">
                                    <input type="text" class="w-full text-white px-6 form-control h-logo rounded-input border border-solid border-white border-opacity-20" placeholder="اسمك الكريم" />
                                </div>

                                <div class="form-group w-full mb-3">
                                    <input type="text" class="w-full text-white px-6 form-control h-logo rounded-input border border-solid border-white border-opacity-20" placeholder="رقم الجوال" />
                                </div>

                                <div class="form-group w-full mb-3">
                                    <input type="text" class="w-full text-white px-6 form-control h-logo rounded-input border border-solid border-white border-opacity-20" placeholder="البريد الالكتروني" />
                                </div>

                                <div class="form-group w-full mb-7">
                                    <textarea class="w-full text-white py-2 px-6 form-control h-input rounded-input border border-solid border-white border-opacity-20" placeholder="نص الرسالة" cols="30" rows="10"></textarea>
                                </div>

                                <button class="rounded-btn btn-content relative z-max w-full h-logo px-10 bg-primary text-dark font-bold text-paragraph leading-head flex justify-center items-center content-center text-center">
                                   ارسال رسالة
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .contact-us{
        .form-control{
            background-color: transparent;
            outline: none;
            resize: none;
            &::placeholder{
                color: #fff;
                opacity: .2;
                font-size: 16px;
                font-family: 500;
                line-height: 30px;
            }
            &:active , &:focus , &:hover , &:focus-within {
                border-color: rgba($color: #FDD301, $alpha: 1.0);
                outline: none;

                &::placeholder{
                    opacity: 1;
                }
            }
        }
    }
    @media (max-width: 900px) {
        .contact-us{
            img{
                height: 300px;
            }
            .form-content{
                padding: 30px 0px !important;
            }
        }
    }
</style>