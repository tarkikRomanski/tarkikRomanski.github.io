<template>
    <div class="itemsColection">
        <div  v-for="post in posts" :key="post.slug"
              class="card">
            <img class="card_image" :src="post.heroimage.url"/>
            <p class="card_title">{{ post.title }}</p>
            <div class="card_description">{{ post.description }}</div>
            <a class="card_more" :href="post.slug">More...</a>
        </div>
    </div>
</template>

<script>
    import PostResource from '../resources/posts';

    export default {
        data() {
            return {
                postResource: new PostResource(this.$apollo),
                posts: [],
            }
        },

        created() {
            this.postResource.getPosts().then(response => this.posts = response);
        }
    }
</script>

