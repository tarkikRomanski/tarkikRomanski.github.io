<template>
    <div class="card">
        <img class="card_image" :src="post.heroimage.url"/>
        <p class="card_title">{{ post.title }}</p>
        <div class="card_description">{{ post.description }}</div>
        <router-link tag="a" class="card_more" :to="{ name: 'post', params: { slug: post.slug } }">
            More...
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>