<template>
    <div dir="rtl">
        <Head :lang="'' + dynamic">
            <Title>{{ dynamic }}</Title>
            <Meta name="description" :content="`${content} `" />
            <Link rel="preload" href="/favicon.ico" as="script" />
        </Head>
        <home-header />
        <slot />
        <home-footer />
    </div>
</template>

<script lang="ts">
export default {
    setup () {
        useMeta({
            bodyAttrs: {
                class: 'test'
            }
        })
        return { dynamic: ref('بيزنس') , content: 'سرعة إنجاز الأعمال' }
    },
    head: {
        title: 'Another title'
    },
}
</script>