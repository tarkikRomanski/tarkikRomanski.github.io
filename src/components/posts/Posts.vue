<template>
    <div class="itemsColection">
        <post-item v-for="post in posts" :key="post.slug" :post="post"></post-item>
    </div>
</template>

<script>
    import PostResource from '../../resources/posts';
    import PostItem from './PostItem';

    export default {
        components: {
            'post-item': PostItem
        },

        data() {
            return {
                portfolioResource: new PostResource(this.$apollo),
                posts: [],
            }
        },

        props: {
            latest: {
                type: Boolean,
                default: false
            }
        },

        created() {
            if (this.latest) {
                this.portfolioResource.getLatestPosts().then(response => this.posts = response);
            } else {
                this.portfolioResource.getPosts().then(response => this.posts = response);
            }
        }
    }
</script>

