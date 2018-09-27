<template>
    <div class="portfolioItem" :style="`background-image:url(${portfolio.images[0].url});`">
        <router-link tag="a" class="portfolioItem_contentWrapper" :to="{ name: 'portfolio.one', params: { slug: portfolio.slug } }">
            <span class="portfolioItem_title">{{ portfolio.name }}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            portfolio: {
                type: Object,
                required: true
            }
        }
    }
</script>