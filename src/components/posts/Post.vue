<template>
    <div>
        <div class="backBtn" @click="back()">Back</div>
        <img :src="post.heroimage.url" :alt="post.heroimage.alt" class="imageHero">
        <article class="accentBlock">
            <h1 class="accentBlock_title">{{ post.title }}</h1>
            <section class="accentBlock_content">{{ post.description }}</section>
            <section class="accentBlock_content accentBlock_content-left" v-html="post.content"></section>
        </article>
    </div>
</template>

<script>
    import PostResource from '../../resources/posts';

    export default {
        data() {
            return {
                postResource: new PostResource(this.$apollo),
                post: null,
            }
        },

        props: {
            slug: {
                type: String,
                required: true
            }
        },

        created() {
            this.postResource.getPost(this.slug).then(response => this.post = response);
        },

        methods: {
            back() {
                this.$router.push('/');
            }
        }
    }
</script>